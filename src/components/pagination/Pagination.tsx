import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import PageNumber from "./PageNumber";
import {useTodoValue} from "../../context/TodoContext"

const StyledPagination = styled.div`
    width: 480px;
    height: 40px;
    background-color: #292e3b;
    border-radius: 10px;
    ${FlexCenterBox};
    gap: 12px;
`;

const Pagination = () => {

    const {pageNumbers} = useTodoValue();

    return (
        <StyledPagination>
            {pageNumbers.map((value:number, index:number) => {
                return <PageNumber numberValue={value} key={index} />
            })}
        </StyledPagination>
    );
};

export default Pagination;