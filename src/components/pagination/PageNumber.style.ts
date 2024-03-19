import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

export const Wrapper = styled(FlexCenterBox)<{ $currentPage: boolean }>`
    height: 24px;
    width: 24px;
    background-color: #56647b;
    color: #ffffff;
    cursor: pointer;
    border-radius: 20px;
    font-size: 14px;
    margin: ${(props) => (props.$currentPage ? "-4px" : "0")};
    border: ${(props) => (props.$currentPage ? "4px solid #1a1f2b" : "none")};
    //font-weight: ${(props) => (props.$currentPage ? "bold" : "normal")};
`;