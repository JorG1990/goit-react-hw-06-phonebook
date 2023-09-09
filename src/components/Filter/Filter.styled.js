
import styled from "styled-components";

export const FromStyled = styled.from`
  displey: flex;
  flex-direccion: colomn;
  align-items: center;
  gap: 15px;

  & label {
    display: flex;
    flex-direction: colum;
    gap: 10px;
    color: white;
  }

  & input {
    width: 240px;
    height; 20px;
    margin-left: 0px;
  }

  & button: hover {
    backgraun-color: #1a73e8;
    color: white;
    transform: scale(1.05);
  }
`;
