import styled from "styled-components";

const background = ({ background = "#c2c2c2" }) => `${background}`;
const color = ({ color = "#231F20" }) => `${color}`;

const PH = styled.div`
  background: ${background};
  color: ${color};
  text-align: center;
`;
export default PH;