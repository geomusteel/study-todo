import React from 'react';
import * as S from './AddButton.style'
import { FaPlus } from "react-icons/fa6";
interface props {
    onClick: () => void
}

const AddButton = ({onClick}: props) => {
    return (
        <S.Wrapper onClick={onClick}>
            <FaPlus />
        </S.Wrapper>
    );
};

export default AddButton;