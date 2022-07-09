import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  padding: 5px 15px;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgb(0 0 0 / 15%);
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    background-color: blue;
    color: white;
    transition: all 0.2s;
  }
`;
