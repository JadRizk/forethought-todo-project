import React from "react";

import { TodoItem } from "components";
import { ITodoItem } from "utils/interfaces";

interface Props {
  todoList: ITodoItem[];
  onToggleTodo: (item: ITodoItem) => void;
}

const TodoList: React.FC<Props> = ({ todoList, onToggleTodo }) => {
  return (
    <>
      {/* Map Array */}
      {todoList.map((item: ITodoItem, i: Number) => {
        return (
          <TodoItem
            key={`${i}-Todo-list`}
            todoItem={item}
            onToggleTodo={() => onToggleTodo(item)}
          />
        );
      })}
    </>
  );
};

export default TodoList;
