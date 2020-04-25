import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { AppHeader, TodoList } from 'components';
import { ITodoItem } from 'utils/interfaces';

const App = () => {
  // States
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  /**
   * Handle the Todo checkbox action
   *
   * @param item - Toggled item
   */
  const onTodoToggle = (item: ITodoItem) => {
    const updateList = todoList.map((todo: ITodoItem) => {
      const { key, isCompleted } = todo;
      return key === item.key ? { ...todo, isCompleted: !isCompleted } : todo;
    });

    setTodoList(updateList);
  };

  /**
   * Toggle/Untoggle the form view (TodoInput.tsx)
   */
  const onFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  /**
   * Handle the addition of new todos to the list
   *
   * @param taskTitle - Todo title
   * @param date - ?Expected Date
   */
  const onSubmit = (taskTitle: string, date: string) => {
    setTodoList((prevTodo) => [
      ...prevTodo,
      {
        key: uuidv4(),
        title: taskTitle,
        expectedDate: date,
        isCompleted: false,
      },
    ]);

    onFormToggle();
  };

  /**
   * Handle todo removal
   *
   * @param item - Item to remove
   */
  const onRemoveTodo = (item: ITodoItem) => {
    const updatedList = todoList.filter((todo: ITodoItem) => todo.key !== item.key);

    setTodoList(updatedList);
  };

  return (
    <AppContainer>
      <RootContainer>
        <AppHeader
          formStatus={isFormVisible}
          totalTaskNumber={todoList.length}
          onInputToggle={onFormToggle}
          onSubmit={onSubmit}
        />
        <TodoList
          todoList={todoList}
          formStatus={isFormVisible}
          onToggleTodo={onTodoToggle}
          onRemoveTodo={onRemoveTodo}
        />
      </RootContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  background-color: red;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(28deg, rgba(244, 116, 117, 1) 50%, rgba(89, 93, 229, 1) 50%);
`;

const RootContainer = styled.div`
  width: 30rem;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  background: #fff;
  min-height: 85vh;
  border-radius: 0.5rem;
`;
