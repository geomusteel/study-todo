import React, {useState} from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

const StyledColorSelectField = styled.div`
    width: 240px;
    height: 40px;
    background-color: #ffecda;
    position: absolute;
    left: 180px;
    top: 97px;
    border-radius: 50px;
    gap: 3px;
    ${FlexCenterBox};

`;

interface StyledColorSelectButtonProps {
    $color: string
    $boxSize: string,
    $isSelected: boolean
}

const ColorSelectButtonWrap = styled.div`
    height: 24px;
    width: 24px;
    ${FlexCenterBox}
`;

const ColorSelectButton = styled.div<StyledColorSelectButtonProps>`
    height: ${(props) => props.$boxSize};
    width: ${(props) => props.$boxSize};
    background-color: ${(props) => props.$color};
    border-radius: 50%;
    cursor: pointer;
    transition: height 0.1s linear, width 0.1s linear;

`;

const initialValue = [
    {color: "#f29b76", isSelected: true, boxSize: "24px"},
    {color: "#facd89", isSelected: false, boxSize: "16px"},
    {color: "#cce198", isSelected: false, boxSize: "16px"},
    {color: "#89c997", isSelected: false, boxSize: "16px"},
    {color: "#7ecef4", isSelected: false, boxSize: "16px"},
    {color: "#8f82bc", isSelected: false, boxSize: "16px"},
    {color: "#c490bf", isSelected: false, boxSize: "16px"},
    {color: "#f29c9f", isSelected: false, boxSize: "16px"}
]
const ColorSelectField = () => {

    const [colorSelected, setColorSelected] = useState(initialValue)

    const handleClick = (outIndex: number) => {
        const newBoxes = colorSelected.map((value, innerIndex:number) => {
            if (innerIndex === outIndex) {
                return {
                    ...value,
                    isSelected: true,
                    boxSize: "24px"
                };
            }
            return {...value, isSelected: false, boxSize: "16px"};
        });

        setColorSelected(newBoxes);
    };

    const ColorSelectButtonList = colorSelected.map((value, index:number) => (
        <ColorSelectButtonWrap key={index}>
            <ColorSelectButton onClick={() => handleClick(index)}
                               $color={value.color}
                               $boxSize={value.boxSize}
                               $isSelected={value.isSelected}
            />
        </ColorSelectButtonWrap>
    ));

    return (
        <StyledColorSelectField>
            {ColorSelectButtonList}
        </StyledColorSelectField>
    );
};

export default ColorSelectField;