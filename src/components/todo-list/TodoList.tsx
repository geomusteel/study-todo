import React from 'react';
import {styled} from "styled-components";
import TodoItem from "./TodoItem";
import {useTodoValue} from "../../context/TodoContext";

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

const TodoList = () => {

    const {todoShowValue} = useTodoValue();

    const todosList = todoShowValue.map((todo) => {
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