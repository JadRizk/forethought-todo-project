import React from 'react';
import styled from 'styled-components';

import { daysOfTheWeek, monthMapper } from 'constants/index';
import { TodoInput } from 'components';

const extensionMapper = (day: number) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

interface Props {
  formStatus: boolean;
  onInputToggle: () => void;
  totalTaskNumber: number;
  onSubmit: (tasktitle: string, date: string) => void;
}

const AppHeader: React.FC<Props> = ({ formStatus, totalTaskNumber, onInputToggle, onSubmit }) => {
  const today = new Date();

  const weekDay = daysOfTheWeek[today.getDay()];
  const dayOfMonth = `${today.getDate()}${extensionMapper(today.getDate())}`;
  const month = monthMapper[today.getMonth()];

  return (
    <RootContainer>
      <HeaderContainer>
        <DateBox>
          <DateLabel>
            <DayOfWeekLabel>{weekDay}, </DayOfWeekLabel>
            {dayOfMonth}
          </DateLabel>
          <MonthLabel>{month}</MonthLabel>
        </DateBox>

        <TaskNumberLabel>
          <b>{totalTaskNumber === 0 ? 'No' : totalTaskNumber}</b> Tasks
        </TaskNumberLabel>
      </HeaderContainer>

      <TodoInput onTodoSubmit={onSubmit} formStatus={formStatus} onInputToggle={onInputToggle} />
    </RootContainer>
  );
};

export default AppHeader;

const RootContainer = styled.div`
  flex-direction: column;
  background: #fbfbff;
  border-bottom: 1px solid #e5e5e7;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  border-bottom: 1px solid #e5e5e7;
`;

const DateBox = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  color: #595de5;
`;

const DayOfWeekLabel = styled.span`
  font-weight: 500;
`;

const DateLabel = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const MonthLabel = styled.div`
  color: #8a8a96;
  font-size: 0.9rem;
`;

const TaskNumberLabel = styled.div`
  color: #8a8a96;
  font-size: 0.7rem;
`;
