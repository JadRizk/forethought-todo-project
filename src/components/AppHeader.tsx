import React from "react";
import styled from "styled-components";

const AppHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <DateBox>
        <DateLabel>
          <b>Thursday,</b> 10th
        </DateLabel>
        <div>December</div>
      </DateBox>

      <div>{`${12} Tasks`}</div>
    </HeaderContainer>
  );
};

export default AppHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-bottom: 0.5px solid #8a8a96;
`;

const DateBox = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
`;

const DateLabel = styled.div`
  font-size: 1.2rem;
`;
