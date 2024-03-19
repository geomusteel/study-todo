import React from 'react';

import {useAppDispatch} from "../../hooks";
import {paginate} from "../../slice/TodoSlice";

import * as S from './PageNumber.style'

interface PageNumberProps {
    numberValue: number
    currentPage: boolean
}

const PageNumber = ({currentPage, numberValue}: PageNumberProps) => {

    const dispatch = useAppDispatch();

    const handlePaginate = (pageNumber: number) => {
        dispatch(paginate(pageNumber))
    }

    return (
        <S.Wrapper $currentPage={currentPage} onClick={() => handlePaginate(numberValue)}>
            {numberValue}
        </S.Wrapper>
    );
};

export default PageNumber;