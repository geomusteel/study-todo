import React from 'react';
import * as S from './ProgressButton.style'

interface ProgressTapsButtonProps {
    name: string
    isSelected: boolean
    onClick: () => void
}


const ProgressButton = ({name, isSelected, onClick}: ProgressTapsButtonProps) => {

    return (
        <S.Wrapper $isSelected={isSelected} onClick={onClick}>
            {name}
        </S.Wrapper>
    );
};

export default ProgressButton;