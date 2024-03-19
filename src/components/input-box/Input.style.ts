import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

export const Wrapper = styled.div`
    width: 400px;
    height: 62px;
    border-radius: 60px;
    background-color: white;
    position: absolute;
    left: 20px;
    top: 24px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2);
    ${FlexCenterBox}
`

export const StyledTodoInput = styled.input<{
    value: string;
    onChange: (event: any) => void;
}>`
    resize: none;
    width: 340px;
    height: 30px;
    font-size: 26px;
    color: darkgray;
    border: none;
    position: absolute;
    left: 22px;
    top: 17px;
    font-family: 'GmarketSansMedium';
    font-weight: normal;
    font-style: normal;

    &:focus {
        outline: none;
    }
`;