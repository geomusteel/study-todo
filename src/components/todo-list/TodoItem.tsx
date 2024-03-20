/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FaCheck, FaXmark, FaPen, FaMinus} from "react-icons/fa6";
import {useAppDispatch} from "../../hooks";
import {remove, complete, updateTodo} from "../../slice/TodoSlice";
import * as S from './TodoItem.style'
import useColor from "../../hooks/useColor";

interface props {
    todo: {
        id: number;
        selected: boolean
        status: boolean;
        content: string;
        color: string;
        createdTime: string;
        completedTime: string;
    }
    onClick: () => void
}

interface Todo {
    id: number;
    selected: boolean
    status: boolean;
    content: string;
    color: string;
    createdTime: string;
    completedTime: string;
}

const TodoItem = ({todo, onClick}: props) => {

        const dispatch = useAppDispatch();

        const [tempTodo, setTempTodo] = useState<Todo>(todo);

        const {colorList, handleColor} = useColor();

        useEffect(() => {
            handleFindColor()
        }, [todo]);

        useEffect(() => {
            setTempTodo(todo)
        }, [todo]);

        const handleFindColor = () => {
            const findColor = colorList.find((item) => item.color === todo.color);
            if (findColor) {
                handleColor(findColor.id)
            }
        }


        const handleRemove = (e: React.MouseEvent, id: number) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(remove(id));
        };

        const handleComplete = (e: React.MouseEvent, id: number) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(complete(id))
        }

        const handleUpdateTodo = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();

            const findColorItem = colorList.find((item) => item.isSelected);
            const findColor: string = findColorItem ? findColorItem.color : "red";
            const updateTodoItem: Todo = {...tempTodo, selected: false, color: findColor}

            dispatch(updateTodo(updateTodoItem))
        }

        const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = {...tempTodo, content: e.target.value}
            if (newValue.content.length >= 14) {
                return;
            }
            setTempTodo(newValue)
        }


        const handleClose = () => {
            onClick()
            setTempTodo(todo)
            handleFindColor()
        }

        const colorListSelect = colorList.map((item) => {
            return (
                <S.ColorSelectBox key={item.id}>
                    <S.ColorSelectButton
                        $boxSize={item.boxSize}
                        $color={item.color}
                        $isSelected={item.isSelected}
                        onClick={() => handleColor(item.id)}
                    />
                </S.ColorSelectBox>
            )
        })

        const findColor = colorList.find((item) => item.isSelected);

        return (
            <>
                {todo.selected ?
                    <S.Wrapper $select={todo.selected}>
                        <S.ColorSelectContainer>{colorListSelect}</S.ColorSelectContainer>
                        <S.ColorBox $color={findColor?.color}/>
                        <S.TextInputBox spellCheck={false}
                                        autoFocus={true}
                                        $status={tempTodo.status}
                                        value={tempTodo.content}
                                        onChange={handleText}
                        />
                        <S.CheckBoxContainer>
                            <S.PenBox onClick={handleUpdateTodo}><FaPen/></S.PenBox>
                            <S.CloseBox onClick={handleClose}><FaXmark/></S.CloseBox>
                        </S.CheckBoxContainer>
                        <S.DateContainer>
                            <S.DateText>등록일 : {tempTodo.createdTime}</S.DateText>
                            <S.DateText>완료일 : {tempTodo.completedTime}</S.DateText>
                        </S.DateContainer>
                    </S.Wrapper>
                    :
                    <S.Wrapper>
                        <S.ColorBox $color={todo.color}/>
                        <S.TextBox onClick={onClick} $status={todo.status}>{todo.content}</S.TextBox>
                        <S.CheckBoxContainer>
                            <S.CompleteBox onClick={(e) => handleComplete(e, todo.id)} $status={todo.status}>
                                <FaCheck/>
                            </S.CompleteBox>
                            <S.RemoveBox onClick={(e) => handleRemove(e, todo.id)}>
                                <FaMinus/>
                            </S.RemoveBox>
                        </S.CheckBoxContainer>
                    </S.Wrapper>
                }
            </>

        );
    }
;

export default TodoItem;