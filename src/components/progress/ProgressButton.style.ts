import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

export const Wrapper = styled(FlexCenterBox) <{ $isSelected: boolean; }>`
    width: 154px;
    height: 60px;
    background-color: ${(props) => (props.$isSelected ? "#56647b" : "#292e3b")};
    border: none;
    color: #ffffff;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color 0.2s linear;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.$isSelected ? "#6e7c94" : "#434a5b")};
    }

    &:active {
        background-color: ${(props) => (props.$isSelected ? "#445167" : "#1e232d")};
    }
`;