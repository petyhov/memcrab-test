import styled from "styled-components";

export const ValueCell = styled.td`
  width: 70px;
  height: 70px;
  font-size: 30px;
  color: ${({ isShowClose }) => (isShowClose ? "white" : "black")};
  text-align: center;
  border: solid 1px black;
  background-color: ${({ isShowClose }) => (isShowClose ? "red" : "orange")};
  cursor: pointer;
  transform: ${({ isShowClose }) => (isShowClose ? "scale(1.1)" : "scale(1)")};
  transition: all 0.3s linear;
`;

export const SumCell = styled(ValueCell)`
  background-color: yellow;
  cursor: default;
`;

export const FooterCell = styled(SumCell)``;

export const ProcentColumn = styled.div.attrs(({ value }) => ({
  children: `${value}%`,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${({ value }) =>
    `linear-gradient(to top, red ${value}%, orange ${value}%)`};
`;
