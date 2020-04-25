import React from 'react';
import styled from 'styled-components';

import { TodoItem } from 'components';
import { ITodoItem } from 'utils/interfaces';

interface Props {
  todoList: ITodoItem[];
  formStatus: boolean;
  onToggleTodo: (item: ITodoItem) => void;
  onRemoveTodo: (item: ITodoItem) => void;
}

const TodoList: React.FC<Props> = ({ todoList, formStatus, onToggleTodo, onRemoveTodo }) => {
  const showTodos = todoList && todoList.length > 0;

  const sortedList = todoList.sort((a, b) => (a.isCompleted ? 1 : -1));

  return (
    <ListContainer formStatus={formStatus}>
      {showTodos ? (
        <>
          {sortedList.map((item: ITodoItem, i: Number) => {
            return (
              <TodoItem
                key={`${i}-Todo-list`}
                todoItem={item}
                onToggleTodo={() => onToggleTodo(item)}
                onRemoveTodo={() => onRemoveTodo(item)}
              />
            );
          })}
        </>
      ) : (
        <NoTodo>Add your first todo now !</NoTodo>
      )}
    </ListContainer>
  );
};

export default TodoList;

const ListContainer = styled.div<{ formStatus: boolean }>`
  margin-top: 1rem;
  overflow-y: auto;
  height: ${({ formStatus }) => (formStatus ? `400px` : `500px`)};
`;

const NoTodo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4c4c54;
`;
