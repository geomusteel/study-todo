import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

const StyledAddButton = styled.button`
    width: 100px;
    height: 46px;
    ${FlexCenterBox};
    background-color: #ff4d4d;
    z-index: 10;
    position: absolute;
    left: 360px;
    top: 32px;
    border-radius: 30px;
    font-size: 24px;
    border: none;
    color: #ffffff;
    cursor: pointer;
`;


const AddButton = () => {
    return (
        <StyledAddButton>
            ADD
        </StyledAddButton>
    );
};

export default AddButton;