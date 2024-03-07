import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import {useTodoAction} from "../../context/TodoContext"

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

    const {action} = useTodoAction();
    return (
        <StyledPageNumber onClick={() => action.paginate(numberValue)}>
            {numberValue}
        </StyledPageNumber>
    );
};

export default PageNumber;