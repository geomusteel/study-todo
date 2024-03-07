import React, {useState} from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import ProgressTapsButton from "./ProgressTapsButton";
import {useTodoAction} from "../../context/TodoContext";

const StyledProgressTapsGroup = styled.div`
    width: 480px;
    height: 60px;
    gap: 4px;
    ${FlexCenterBox}
`;

const initialValue = [
    {name: "전체", isSelected: true},
    {name: "진행중", isSelected: false},
    {name: "완료", isSelected: false}
]

const ProgressTapsGroup = () => {
    const [progress, setProgress] = useState(initialValue);
    const {action} = useTodoAction();

    const clickHandler = (outIndex: number, name: string) => {
        const newProgress = progress.map((state, innerIndex: number) => {
            if (outIndex === innerIndex) {
                return {...state, isSelected: true}
            }
            return {...state, isSelected: false}
        });
        setProgress(newProgress);
        action.progressChange(name)
    };

    return (
        <StyledProgressTapsGroup>
            {progress.map((value, index: number) => (
                <ProgressTapsButton key={index}
                                    onClick={() => clickHandler(index, value.name)}
                                    name={value.name}
                                    isSelected={value.isSelected}
                />
            ))}
        </StyledProgressTapsGroup>
    );
};

export default ProgressTapsGroup;