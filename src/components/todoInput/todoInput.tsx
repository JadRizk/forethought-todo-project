import React, { useState, useRef } from 'react';

import * as Styled from './todoInput.styled';

interface Props {
  formStatus: boolean;
  onInputToggle: () => void;
  onTodoSubmit: (taskTitle: string, time: string) => void;
}

const TodoInput: React.FC<Props> = ({ onTodoSubmit, formStatus, onInputToggle }) => {
  // Declare States
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('');

  // Todo's Title ref
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onSubmit = () => {
    // Callback
    onTodoSubmit(taskTitle, date);

    // Reset Form
    onFormReset();
  };

  const onFormReset = () => {
    setTaskTitle('');
    setDate('');
  };

  /**
   * Handle on Title change
   * @param e - Event
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    return setTaskTitle(value);
  };

  /**
   * Handle on Date change
   * @param e - Event
   */
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    return setDate(value);
  };

  /**
   * Handle on Form toggle
   */
  const handleFormToggle = () => {
    // If TaskTitle is available, we will submit the todo
    if (taskTitle !== '') return onSubmit();

    // Else, close/open
    onInputToggle();
  };

  // Today's Date for the date validation
  const today: string = new Date().toISOString().split('T')[0];

  return (
    <Styled.InputContainer>
      <Styled.Form onSubmit={onSubmit} open={formStatus}>
        <Styled.InputTask value={taskTitle} onChange={onChange} ref={inputRef} autoFocus />
        <Styled.DateContainer>
          <Styled.DateHelper> Should be done by: (Optional)</Styled.DateHelper>
          <Styled.DateInput type="date" value={date} onChange={onDateChange} minDate={today} />
        </Styled.DateContainer>
      </Styled.Form>
      <Styled.AddButton onClick={handleFormToggle} open={formStatus}>
        {formStatus ? (taskTitle ? '+' : 'x') : '+'}
      </Styled.AddButton>
    </Styled.InputContainer>
  );
};

export default TodoInput;
