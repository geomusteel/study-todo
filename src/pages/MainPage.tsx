import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../common/FlexCenterBox";
import InputContainer from "../components/input-box/InputContainer";
import Header from "../components/header/Header";
import ProgressContainer from "../components/progress/ProgressContainer";
import PaginationContainer from "../components/pagination/PaginationContainer";
import TodoListContainer from "../components/todo-list/TodoListContainer";


const StyledInputGroup = styled(FlexCenterBox)`
    width: 660px;
    height: 1000px;
    flex-direction: column;
    gap: 10px;
`;

const MainPage = () => {
    return (

        <StyledInputGroup>
            <Header/>
            <InputContainer/>
            <ProgressContainer/>
            <TodoListContainer/>
            <PaginationContainer/>
        </StyledInputGroup>
    );
};

export default MainPage;