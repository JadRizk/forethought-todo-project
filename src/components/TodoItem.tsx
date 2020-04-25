import React from 'react';
import styled from 'styled-components';

import Checkbox from 'components/CheckBox';
import { ITodoItem } from 'utils/interfaces';

import { ReactComponent as DeleteIcon } from 'assets/svgIcons/delete-icon.svg';

interface Props {
  todoItem: ITodoItem;
  onToggleTodo: () => void;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<Props> = ({ todoItem, onToggleTodo, onRemoveTodo }) => {
  const { title, isCompleted, expectedDate } = todoItem;

  const handleRemoveTodo = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();

    onRemoveTodo();
  };

  return (
    <ItemContainer>
      <Checkbox checked={Boolean(isCompleted)} onChange={onToggleTodo} />

      <ItemText toggled={Boolean(isCompleted)}>{title}</ItemText>

      {isCompleted ? (
        <>
          <RemoveTodo onClick={handleRemoveTodo} />
        </>
      ) : (
        <>
          {expectedDate && expectedDate !== '' && (
            <DateContainer>
              <Label>Expected by:</Label>
              <ExpectedDate>{expectedDate}</ExpectedDate>
            </DateContainer>
          )}
        </>
      )}
    </ItemContainer>
  );
};

export default TodoItem;

const ItemContainer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
`;

const ItemText = styled.div<{ toggled: boolean }>`
  text-decoration: ${(props) => (props.toggled ? 'line-through' : 'none')};
  color: ${(props) => (props.toggled ? '#8a8a96' : '#4c4c54')};
  margin: 0 0.7rem;

  flex-grow: 1;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  color: #8a8a96;
`;

const Label = styled.div`
  font-size: 0.6rem;
`;

const ExpectedDate = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
`;

const RemoveTodo = styled(DeleteIcon)`
  width: 20px;
  fill: #f47475;
`;
