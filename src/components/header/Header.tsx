import React from 'react';
import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";

const StyledHeader = styled.div`
    width: 480px;
    height: 60px;
    background-color: #292e3b;
    border-radius: 10px;
    color: #ffffff;
    font-size: 30px;
    ${FlexCenterBox}
`;

const Header = () => {
    return (
        <StyledHeader>
            TODO
        </StyledHeader>
    );
};

export default Header;