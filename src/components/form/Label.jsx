import styled from "styled-components";
import PropTypes from "prop-types";

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
`;

const InputStyled = styled.input`
  margin-left: 10px;
  width: 50px;
  text-align: center;
  font-size: 20px;
  border: none;
  border-radius: 10px;
`;

export const Label = ({ name, setValue, value }) => {
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <LabelStyled>
      {name}
      <InputStyled onChange={inputHandler} value={value} />
    </LabelStyled>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
