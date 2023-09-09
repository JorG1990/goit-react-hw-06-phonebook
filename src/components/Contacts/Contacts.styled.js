
import styled from "styled-components";

export const Table = styled.table`
  margin: 10px auto;
  width: 400px;
  display: flex;
  justify-content: center;

  & td {
    pading: 10px;
    text-align: left;
    color: white;
  }

  & td: first-child {
    font-weinht: bold
  }

  & button: hover {
    background-color: #1a73e8;
    color: white;
    transfrom: scale(1.05);
  }
`;
