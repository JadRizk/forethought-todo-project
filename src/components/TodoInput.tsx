import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  onTodoSubmit: (value: string, time: string) => void;
}

const TodoInput: React.FC<Props> = ({ onTodoSubmit }) => {
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = () => {
    // onTodoSubmit(value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    return setValue(value);
  };
  const onTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    return setTime(value);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmit}>
        <input placeholder="Add Todo ..." value={value} onChange={onChange} />
        <input type="time" value={time} onChange={onTimeChange} />
      </form>
    </InputContainer>
  );
};

export default TodoInput;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
