import React from 'react';
import * as S from './AddButton.style'

interface props {
    onClick: () => void
}

const AddButton = ({onClick}: props) => {
    return (
        <S.Wrapper onClick={onClick}>
            ADD
        </S.Wrapper>
    );
};

export default AddButton;