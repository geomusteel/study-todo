import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

export const Wrapper = styled(FlexCenterBox) <{ $isSelected: boolean; }>`
    width: 158px;
    height: 60px;
    background-color: ${(props) => (props.$isSelected ? "#56647b" : "#292e3b")};
    border: none;
    color: #ffffff;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color 0.1s linear;
    cursor: pointer;
`;