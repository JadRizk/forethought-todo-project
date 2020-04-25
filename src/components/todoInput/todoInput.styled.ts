import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
position: relative;
background: #fbfbff;
`;

export const Form = styled.form<{ open: boolean }>`
width: 100%;
display: flex;
flex-direction: column;
padding: 1rem 1.5rem;

display: ${(props) => (props.open ? 'flex' : 'none')};
`;

export const InputTask = styled.input.attrs({
    placeholder: 'What do you want to do ?',
})`
width: 100%;
align-self: center;
height: 1.5rem;
border: 1px solid #595de5;
margin-bottom: 0.7rem;

//Favor Design over Accessibility
&:focus {
  outline: 0 !important;
}
`;

export const DateContainer = styled.div`
flex-direction: column;
`;

export const DateHelper = styled.div`
display: flex;
flex-direction: column;
font-size: 0.7rem;
padding: 0.5rem 0;
color: #8a8a96;
font-weight: 500;
`;

export const DateInput = styled.input.attrs<{ minDate: string }>(({ minDate }) => ({
    type: 'date',
    min: minDate,
})) <{ minDate: string }>`
width: 50%;
height: 1.5rem;
border: 1px dashed #595de5;
margin-bottom: 1.9rem;
`;
export const AddButton = styled.button.attrs({
    type: 'button',
}) <{ open: boolean }>`
position: absolute;
width: 45px;
height: 45px;

display: flex;
justify-content: center;
align-items: center;

right: 15px;

${(props) => (props.open ? `bottom: -20px;` : `top: -25px;`)}

color: #fff;
background-color: #f47475;
border: 0;
border-radius: 50px;
box-shadow: 2px 2px 3px #999;
font-size: 1.5rem;

//Favor Design over Accessibility
&:focus {
  outline: 0 !important;
}
`;
