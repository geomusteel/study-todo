import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import PageNumber from "./PageNumber";
import {useAppSelector} from "../../hooks";

const StyledPagination = styled.div`
    width: 480px;
    height: 40px;
    background-color: #292e3b;
    border-radius: 10px;
    ${FlexCenterBox};
    gap: 12px;
`;

const Pagination = () => {

    const todoList = useAppSelector((state) => state.todos.todoList)
    const currentPage = useAppSelector((state) => state.todos.currentPage)
    const filterStatus = useAppSelector((state) => state.todos.filterStatus)

    const itemsPerPage = 5;

    let totalPages;
    totalPages = Math.ceil(todoList.length / itemsPerPage);

    const activeFilter = filterStatus.find(f => f.isSelected);

    if (activeFilter?.name === "진행중") {
        totalPages = Math.ceil(todoList.filter((todo) => todo.status).length / itemsPerPage);
    } else if (activeFilter?.name === "완료") {
        totalPages = Math.ceil(todoList.filter((todo) => !todo.status).length / itemsPerPage);
    }

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


    return (
        <StyledPagination>
            {pageNumbers.map((value: number, index: number) => {
                return <PageNumber numberValue={value} key={index}/>
            })}
        </StyledPagination>
    );
};

export default Pagination;