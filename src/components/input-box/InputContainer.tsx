import React, {useState} from 'react';
import Input from "./Input";
import ColorSelectField from "./ColorSelectField";
import AddButton from "./AddButton";
import {useAppDispatch} from "../../hooks";
import {useAppSelector} from "../../hooks";
import {addTodo, sequenceUpdate} from "../../slice/TodoSlice";
import * as S from './InputContainer.style'
import {getCurrentDateTime} from "../../utility/CurrentDateTime";


const initialData = {
    id: 0,
    selected: false,
    status: true,
    content: "",
    color: "#f29b76",
    createdTime: "",
    completedTime: ""
}

interface inputDate {
    id: number,
    selected: boolean,
    status: boolean,
    content: string,
    color: string,
    createdTime: string,
    completedTime: string
}

const InputContainer = () => {

    const [inputValue, setInputValue] = useState<inputDate>(initialData);
    const sequence = useAppSelector(state => state.todos.sequence);
    const dispatch = useAppDispatch()

    const handleInputChange = (event: any) => {
        const newValue = {...inputValue, content: event.target.value}
        setInputValue(newValue)
    }

    const handleColorChange = (inputColor: string) => {
        const newValue = {...inputValue, color: inputColor}
        setInputValue(newValue)
    }

    const handleSequence = () => {
        dispatch(sequenceUpdate())
    }

    const handleAddInput = () => {
        const currentDateTime = getCurrentDateTime();
        const completeValue = {...inputValue, id: sequence, createdTime: currentDateTime};
        dispatch(addTodo(completeValue))
        handleSequence();
        console.log(completeValue)
        setInputValue(initialData)
    }




    return (
        <S.Wrapper>
            <AddButton onClick={() => handleAddInput()}/>
            <Input inputValue={inputValue.content} onChange={handleInputChange}/>
            <ColorSelectField onChange={handleColorChange}/>
        </S.Wrapper>
    );
};

export default InputContainer;