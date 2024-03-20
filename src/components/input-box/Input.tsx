import React from 'react';
import * as S from './Input.style'

interface props {
    inputValue: string
    onChange: (event: any) => void
}

const Input = ({inputValue, onChange}: props) => {

    return (
        <S.Wrapper>
            <S.StyledTodoInput spellCheck={false} value={inputValue} onChange={onChange}/>
        </S.Wrapper>

    );
};

export default Input;