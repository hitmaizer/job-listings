import styled from "styled-components";

export default styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.offGray};
  color: ${(props) => props.theme.colors.offGray};
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primaryBlue};
    border: 1px solid ${(props) => props.theme.colors.primaryBlue};
  }
`;
