import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  background-color: #f0f8ff;
  box-shadow: 0 3px 5px 0 #69696970;

  img {
    width: 40px;
    transform: rotate(270deg);
  }

  div {
    display: flex;
    gap: 30px;
  }
`;
