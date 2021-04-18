import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
`;

export const RemoveButton = styled(Button)`
  width: 40px;
  height: 40px;
  background-color: red;
`;

export const AddButton = styled(Button)`
  width: 50px;
  height: 50px;
  background-color: orange;
`;
