import React, {useState} from 'react';
import * as S from './ColorSelectField.style'
import UseColor from '../../hooks/useColor'

interface props {
    onChange: (inputColor: string) => void
}

const ColorSelectField = ({onChange}: props) => {

    const {colorList, handleColor: originalHandleColor} = UseColor();

    const handleColor = (id: number) => {

        originalHandleColor(id);

        const selectedItem = colorList.find((item) => item.id === id);
        if (selectedItem) {
            onChange(selectedItem.color);
        }
    };


    const ColorSelectButtonList = colorList.map((item, index) => (
        <S.ColorSelectBox key={index}>
            <S.ColorSelectButton onClick={() => handleColor(item.id)}
                                 $color={item.color}
                                 $boxSize={item.boxSize}
                                 $isSelected={item.isSelected}
            />
        </S.ColorSelectBox>
    ));

    return (
        <S.Wrapper>
            {ColorSelectButtonList}
        </S.Wrapper>
    );
};

export default ColorSelectField;