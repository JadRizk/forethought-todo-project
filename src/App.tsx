import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { AppHeader, TodoList, TodoInput } from "components";
import { ITodoItem } from "utils/interfaces";

const tempItem: ITodoItem[] = [
  {
    key: "blablabla",
    title: "Hello World!",
    expectedDate: "asdf",
    isActive: false,
  },
  {
    key: "blablabla",
    title: "Hello World 2!",
    expectedDate: "asdf",
    isActive: false,
  },
];

const App = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  const onTodoToggle = (item: ITodoItem) => {};

  // Adding a Todo
  // const onSubmit = (value: string, date: string) => {
  //   setTodoList((prevTodo) => [
  //     ...prevTodo,
  //     {
  //       key: uuidv4(),
  //       title: value,
  //       expectedDate: date,
  //       isActive: false,
  //     },
  //   ]);
  // };

  return (
    <AppContainer>
      <RootContainer>
        <AppHeader />
        <TodoInput onTodoSubmit={() => console.log("Here")} />
        <TodoList onToggleTodo={onTodoToggle} todoList={tempItem} />
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
  background: linear-gradient(
    28deg,
    rgba(244, 116, 117, 1) 50%,
    rgba(89, 93, 229, 1) 50%
  );
`;

const RootContainer = styled.div`
  width: 30rem;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  background: #fff;
`;
