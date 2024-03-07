import React , { createContext, useContext } from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../common/FlexCenterBox";
import InputGroup from "../components/input-box/InputGroup";
import Header from "../components/header/Header";
import ProgressTapsGroup from "../components/progress-taps/ProgressTapsGroup";
import Pagination from "../components/pagination/Pagination";
import TodoList from "../components/todo-list/TodoList";



const StyledInputGroup = styled.div`
    width: 660px;
    height: 1000px;
    ${FlexCenterBox};
    flex-direction: column;
    gap: 20px;
`;

const MainPage = () => {
    return (

        <StyledInputGroup>
            <Header/>
            <InputGroup/>
            <ProgressTapsGroup/>
            <Pagination/>
            <TodoList/>
        </StyledInputGroup>
    );
};

export default MainPage;