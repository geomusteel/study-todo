import React, {createContext, useState, useContext, useEffect, ReactNode, useMemo} from 'react';
import initialData from '../data/initialData';

interface Todo {
    id: number;
    selected: boolean
    status: boolean;
    content: string;
    color: string;
    createdTime: string;
    completedTime: string;
}

interface TodoValueContextType {
    todoShowValue: Todo[];
    currentPage: number;
    pageNumbers: number[];
}

interface TodoActionContextType {
    action: {
        complete(id: number): void;
        remove(id: number): void;
        progressChange(name: string): void
        paginate(pageNumber: number): void
    };
}

interface TodoProviderProps {
    children: ReactNode;
}

const TodoValueContext = createContext<TodoValueContextType | undefined>(undefined);
const TodoActionContext = createContext<TodoActionContextType | undefined>(undefined);

const TodoProvider = ({children}: TodoProviderProps) => {
    const [todoValue, setTodoValue] = useState<Todo[]>(initialData);
    const [todoShowValue, setTodoShowValue] = useState<Todo[]>(initialData)
    const [progress, setProgress] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage = 5;

    let totalPages = 0;

    if (progress === 0) {
        totalPages = Math.ceil(todoValue.length / itemsPerPage);
    } else if (progress === 1) {
        totalPages = Math.ceil(todoValue.filter((todo) => todo.status).length / itemsPerPage);
    } else if (progress === 2) {
        totalPages = Math.ceil(todoValue.filter((todo) => !todo.status).length / itemsPerPage);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage <= 0) {
        endPage -= (startPage - 1);
        startPage = 1;
    }

    if (endPage > totalPages) {
        startPage -= (endPage - totalPages);
        endPage = totalPages;
    }

    startPage = Math.max(startPage, 1);

    const pageNumbers = Array.from({length: (endPage - startPage + 1)}, (_, idx) => startPage + idx);


    const action = useMemo(
        () => ({
                complete(id: number) {
                    const newValue = todoValue.map((value) => {
                        if (id === value.id) {
                            return {...value, status: !value.status}
                        }
                        return {...value}
                    })
                    setTodoValue(newValue)
                },
                remove(id: number) {
                    const newValue = todoValue.filter(value => value.id !== id);
                    setTodoValue(newValue)
                },
                progressChange(name: string) {
                    if (name === "전체") {
                        setTodoShowValue(todoValue.slice(0, 5))
                        setProgress(0)
                        setCurrentPage(1)
                    } else if (name === "진행중") {
                        setTodoShowValue(todoValue.filter((value => value.status)).slice(0, 5))
                        setProgress(1)
                        setCurrentPage(1)
                    } else if (name === "완료") {
                        setTodoShowValue(todoValue.filter((value => !value.status)).slice(0, 5))
                        setProgress(2)
                        setCurrentPage(1)
                    }
                },
                paginate(pageNumber: number) {
                    setCurrentPage(pageNumber)
                }
            }
        ), [todoValue]
    )

    useEffect(() => {
        if (progress === 0) {
            const newValue = todoValue.slice(indexOfFirstItem, indexOfLastItem)
            if (newValue.length === 0) {
                setCurrentPage((prevState) => {
                    if (prevState >= 1) {
                        return prevState - 1
                    }
                    return prevState
                })
            }
            setTodoShowValue(newValue)
        } else if (progress === 1) {
            const newValue = todoValue.filter((value => value.status)).slice(indexOfFirstItem, indexOfLastItem)
            if (newValue.length === 0) {
                setCurrentPage((prevState) => {
                    if (prevState >= 1) {
                        return prevState - 1
                    }
                    return prevState
                })
            }
            setTodoShowValue(newValue)
        } else if (progress === 2) {
            const newValue = todoValue.filter((value => !value.status)).slice(indexOfFirstItem, indexOfLastItem)
            if (newValue.length === 0) {
                setCurrentPage((prevState) => {
                    if (prevState >= 1) {
                        return prevState - 1
                    }
                    return prevState
                })
            }
            setTodoShowValue(newValue)
        }
    }, [todoValue, progress, indexOfFirstItem, indexOfLastItem, currentPage])

    return (
        <TodoActionContext.Provider value={{action}}>
            <TodoValueContext.Provider value={{todoShowValue, currentPage, pageNumbers}}>
                {children}
            </TodoValueContext.Provider>
        </TodoActionContext.Provider>
    );
};

function useTodoValue(): TodoValueContextType {
    const value = useContext(TodoValueContext);
    if (value === undefined) {
        throw new Error('TodoValueContext must be used within a TodoProvider');
    }
    return value;
}

function useTodoAction(): TodoActionContextType {
    const value = useContext(TodoActionContext);
    if (value === undefined) {
        throw new Error('TodoActionContext must be used within a TodoProvider');
    }
    return value;
}

export {TodoProvider, useTodoValue, useTodoAction};
