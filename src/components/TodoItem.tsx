import React from "react";

import { ITodoItem } from "utils/interfaces";
import styled from "styled-components";

interface Props {
  todoItem: ITodoItem;
  onToggleTodo: () => void;
}

const TodoItem: React.FC<Props> = ({ todoItem, onToggleTodo }) => {
  const { title, isActive, expectedDate } = todoItem;

  return (
    <ItemContainer>
      <input type="checkbox" checked={Boolean(isActive)} />
      <Title>{title}</Title>
      <div>{expectedDate}</div>
    </ItemContainer>
  );
};

export default TodoItem;

const ItemContainer = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
`;

const Title = styled.div`
  flex-grow: 1;
`;
