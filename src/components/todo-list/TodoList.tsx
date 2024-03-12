import React from 'react';
import {styled} from "styled-components";
import TodoItem from "./TodoItem";
import {useAppSelector} from "../../hooks";
import {useAppDispatch} from "../../hooks";
import {paginate} from "../../slice/TodoSlice";


const StyledTodoList = styled.div`
    width: 480px;
    height: 520px;
    background-color: #292e3b;
    border-radius: 10px;
    flex-direction: column;
    padding-top: 20px;
    gap: 8px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

interface Todo {
    id: number;
    selected: boolean
    status: boolean;
    content: string;
    color: string;
    createdTime: string;
    completedTime: string;
}

const TodoList = () => {

    const dispatch = useAppDispatch()

    const todos: Todo[] = useAppSelector(state => state.todos.todoList)
    const filter = useAppSelector(state => state.todos.filterStatus)
    const currentPage = useAppSelector(state => state.todos.currentPage)

    const handlePaginate = (pageNumber: number) => {
        dispatch(paginate(pageNumber))
    }

    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    let filteredTodos = todos;
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

    const todosList = filteredTodos.map((todo) => {
        return (
            <TodoItem
                key={todo.id}
                id={todo.id}
                content={todo.content}
                color={todo.color}
                status={todo.status}
            />
        )
    })

    return (
        <StyledTodoList>
            {todosList}
        </StyledTodoList>
    );
};

export default TodoList;