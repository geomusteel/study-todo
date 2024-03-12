import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import {useAppDispatch} from "../../hooks";
import {paginate} from "../../slice/TodoSlice";

const StyledPageNumber = styled.div`
    height: 24px;
    width: 24px;
    background-color: #56647b;
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
    font-size: 14px;

    ${FlexCenterBox};
`;

interface PageNumberProps {
    numberValue: number
}

const PageNumber = ({numberValue}: PageNumberProps) => {

    const dispatch = useAppDispatch();

    const handlePaginate = (pageNumber: number) => {
        dispatch(paginate(pageNumber))
    }

    return (
        <StyledPageNumber onClick={() => handlePaginate(numberValue)}>
            {numberValue}
        </StyledPageNumber>
    );
};

export default PageNumber;