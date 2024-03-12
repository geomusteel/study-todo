import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import {FaCheck} from "react-icons/fa6";
import {FaXmark} from "react-icons/fa6";
import {useAppDispatch} from "../../hooks";
import {remove, complete} from "../../slice/TodoSlice";

const StyledTodoItem = styled.div`
    width: 440px;
    height: 80px;
    background-color: #1a1f2b;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ColorBox = styled.div<colorProps>`
    height: 56px;
    width: 8px;
    border-radius: 4px;
    margin: 0 0 0 20px;
    background-color: ${(props) => (props.$color)};
`;

const TextBox = styled.div<statusProps>`
    height: 56px;
    width: 328px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${(props) => (props.$status ? "#ffffff" : "#414654")};
    text-decoration: ${(props) => (props.$status ? "none" : "line-through")};
`;

const CheckBoxWrap = styled.div`
    height: 56px;
    width: 24px;
    margin: 0 20px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const CompleteCheckBox = styled.div<statusProps>`
    height: 24px;
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.$status ? "#ffecda" : "#56647b")};
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;


    ${FlexCenterBox};
`;

const RemoveCheckBox = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #414654;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;


    ${FlexCenterBox};
`;

interface props {
    id: number
    content: string
    color: string
    status: boolean
}

interface colorProps {
    $color: string
}

interface statusProps {
    id?: number
    $status?: boolean
}

const TodoItem = ({content, color, status, id}: props) => {

    const dispatch = useAppDispatch();

    const handleRemove = (id: number) => {
        dispatch(remove(id));
    };

    const handleComplete = (id: number) => {
        dispatch(complete(id))
    }


    return (
        <StyledTodoItem>
            <ColorBox $color={color}/>
            <TextBox $status={status}>{content}</TextBox>
            <CheckBoxWrap>
                <CompleteCheckBox onClick={() => handleComplete(id)}
                                  $status={status}><FaCheck/></CompleteCheckBox>
                <RemoveCheckBox onClick={() => handleRemove(id)}><FaXmark/></RemoveCheckBox>
            </CheckBoxWrap>
        </StyledTodoItem>
    );
};

export default TodoItem;