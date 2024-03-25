import {styled, keyframes } from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import React from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Wrapper = styled.div<{ $select?: boolean }>`
    width: 440px;
    height: ${(props) => (props.$select ? "140px" : "80px")};
    background-color: #1a1f2b;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: ${(props) => (props.$select ? "2px solid #49576d" : "2px solid transparent")};

    &:hover {
        border: ${(props) => (props.$select ? "2px solid #49576d" : "2px solid #49576d")};
    }
    transition: all 0.1s ease;

`;

export const CheckBoxContainer = styled.div`
    height: 56px;
    width: 24px;
    margin: 0 20px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ColorBox = styled.div<{ $color?: string }>`
    height: 56px;
    width: 8px;
    border-radius: 4px;
    margin: 0 0 0 20px;
    background-color: ${(props) => (props.$color)};
`;

export const TextInputBox = styled.input<{
    $status: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}>`
    background-color: #292e3b;
    border: none;
    border-radius: 10px;
    height: 56px;
    width: 318px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${(props) => (props.$status ? "#ffffff" : "#414654")};
    text-decoration: ${(props) => (props.$status ? "none" : "line-through")};
    cursor: pointer;

    &:focus {
        outline: none;
        border: 2px solid black;
    }


`;

export const TextBox = styled.div<{ $status: boolean }>`
    height: 56px;
    width: 318px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-size: 20px;
    border-radius: 10px;
    color: ${(props) => (props.$status ? "#ffffff" : "#414654")};
    text-decoration: ${(props) => (props.$status ? "none" : "line-through")};
    cursor: pointer;

    &:hover {
        background-color: #292e3b;
    }
`;

export const CompleteBox = styled(FlexCenterBox)<{ $status: boolean }>`
    height: 24px;
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.$status ? "#ffecda" : "#56647b")};
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const PenBox = styled(FlexCenterBox)`
    height: 24px;
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ffffff;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const RemoveBox = styled(FlexCenterBox)`
    height: 24px;
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #414654;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const CloseBox = styled(FlexCenterBox)`
    height: 24px;
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ffffff;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const ColorSelectContainer = styled(FlexCenterBox)`
    width: 240px;
    height: 30px;
    position: absolute;
    left: 100px;
    top: 5px;
    border-radius: 50px;
    gap: 3px;

    animation: ${fadeIn} 0.4s forwards;
`;

export const ColorSelectBox = styled(FlexCenterBox)`
    height: 24px;
    width: 24px;
`;

export const ColorSelectButton = styled.div<{
    $color: string,
    $boxSize: string,
    $isSelected: boolean,
    onClick: () => void
}>`
    height: ${(props) => props.$boxSize};
    width: ${(props) => props.$boxSize};
    background-color: ${(props) => props.$color};
    border-radius: 50%;
    cursor: pointer;
    transition: height 0.1s linear, width 0.1s linear;
`;

export const DateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 110px;
    left: 20px;
    height: 20px;
    width: 400px;

    animation: ${fadeIn} 0.4s forwards;
    
`;

export const DateText = styled.div`
    padding-left: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 13px;
    color: #838383;
    height: 20px;
    width: 200px;
`;