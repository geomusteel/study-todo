import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

export const Wrapper = styled(FlexCenterBox)`
    width: 240px;
    height: 40px;
    background-color: #ffecda;
    position: absolute;
    left: 180px;
    top: 97px;
    border-radius: 50px;
    gap: 3px;
`;

export const ColorSelectBox = styled(FlexCenterBox)`
    height: 24px;
    width: 24px;
`;

export const ColorSelectButton = styled.div<{ $color: string, $boxSize: string, $isSelected: boolean }>`
    height: ${(props) => props.$boxSize};
    width: ${(props) => props.$boxSize};
    background-color: ${(props) => props.$color};
    border-radius: 50%;
    cursor: pointer;
    transition: height 0.1s linear, width 0.1s linear;
`;