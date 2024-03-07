import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";


interface ProgressTapsButtonProps {
    name: string
    isSelected: boolean
    onClick: () => void
}

interface StyledProgressTapsButtonProps {
    children: string;
    $isSelected: boolean;
    onClick: () => void;
}


const StyledProgressTapsButton = styled.button<StyledProgressTapsButtonProps>`
    width: 158px;
    height: 60px;
    background-color: ${(props) => (props.$isSelected ? "#56647b" : "#292e3b")};
    border: none;
    color: #ffffff;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color 0.1s linear;
    cursor: pointer;
    ${FlexCenterBox};
`;

const ProgressTapsButton = ({name, isSelected, onClick}: ProgressTapsButtonProps) => {


    return (
        <StyledProgressTapsButton $isSelected={isSelected} onClick={onClick}>
            {name}
        </StyledProgressTapsButton>
    );
};

export default ProgressTapsButton;