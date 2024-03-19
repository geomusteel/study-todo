import React, {useCallback, useEffect, useState} from 'react';
import TodoItem from "./TodoItem";
import {useAppDispatch} from "../../hooks";
import {useAppSelector} from "../../hooks";
import {paginate} from "../../slice/TodoSlice";

import * as S from './TodoListContainer.style'

interface Todo {
    id: number;
    selected: boolean
    status: boolean;
    content: string;
    color: string;
    createdTime: string;
    completedTime: string;
}

const TodoListContainer = () => {

    const dispatch = useAppDispatch()

    const todos: Todo[] = useAppSelector(state => state.todos.todoList)
    const filter = useAppSelector(state => state.todos.filterStatus)
    const currentPage = useAppSelector(state => state.todos.currentPage)
    const [currentTodo, setCurrentTodo] = useState<Todo[] | undefined>(undefined)

    const handlePaginate = useCallback((pageNumber: number) => {
        dispatch(paginate(pageNumber))
    }, [dispatch])

    const handleSelect = (id: number) => {
        const newValue = currentTodo && currentTodo.map((value) => {
                if (value.id === id) {
                    return {...value, selected: !value.selected}
                }
                return {...value, selected: false}
            }
        )
        setCurrentTodo(newValue)
    }

    useEffect(() => {
        const itemsPerPage = 5;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;

        let filteredTodos: Todo[] = todos;
        const activeFilter = filter.find(f => f.isSelected);
        if (activeFilter?.name === "진행중") {
            filteredTodos = todos.filter((todo) => todo.status);
        } else if (activeFilter?.name === "완료") {
            filteredTodos = todos.filter((todo) => !todo.status);
        }


        filteredTodos = filteredTodos.slice(indexOfFirstItem, indexOfLastItem);
        if (filteredTodos.length === 0 && currentPage !== 1) {
            handlePaginate(currentPage - 1)
        }
        setCurrentTodo(filteredTodos)

    }, [currentPage, filter, todos, handlePaginate]);


    const todosList = currentTodo && currentTodo.map((item,index) => {
        return (
            <TodoItem
                key={index}
                todo={item}
                onClick={() => handleSelect(item.id)}
            />
        )
    })

    return (
        <S.Wrapper>
            {todosList}
        </S.Wrapper>
    );
};

export default TodoListContainer;