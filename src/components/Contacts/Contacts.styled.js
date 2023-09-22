
import styled from 'styled-components';

export const Table = styled.table`
  margin: 10px auto;
  width: 400px;
  display: flex;
  justify-content: center;


  & td {
    padding: 10px;
    text-align: left;
    color: #11620F;
  }

  & td:first-child {
    font-weight: bold;
  }

  & button {
    padding: 8px 10px;
    background-color: #15C4BC;
    border: 0px;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }

  & button:hover {
    background-color: #AD2609;
    color: #0AF305;
    transform: scale(1.05);
  }
`;
