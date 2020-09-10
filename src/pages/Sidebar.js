import React from 'react';

import styled from "styled-components";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <div>linkedIn icon here</div>
            <div>github icon here</div>
            <div>email address here (vertical)?</div>
        </StyledSidebar>
    )
}

export default Sidebar;

const StyledSidebar = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    padding: 40px;
`;