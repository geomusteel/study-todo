import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import Input from "./Input";
import ColorSelectField from "./ColorSelectField";
import AddButton from "./AddButton";

const StyledTodoInputBox = styled.div`
    width: 480px;
    height: 148px;
    color: white;
    background-color: #49576d;
    border-radius: 10px;
    position: relative;
    ${FlexCenterBox};


`;

const InputGroup = () => {
    return (
        <StyledTodoInputBox>
            <AddButton/>
            <Input/>
            <ColorSelectField/>
        </StyledTodoInputBox>
    );
};

export default InputGroup;