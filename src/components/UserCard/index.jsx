import styled from "styled-components";

export const UserCard = styled.section`
  width: 20rem;
  height: 28rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  padding: 30px 15px;

  border-radius: 35px 0;
  outline: 3px solid #303952;
  outline-offset: -15px;

  text-align: center;

  box-shadow: -5px 5px 5px 0 #00000080;

  background-color: #7f8eb8;

  div {
    width: 15rem;
    height: 15rem;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border-radius: 20px;

    box-shadow: -2px 2px 5px 0 #00000080;

    /* background-color: aliceblue; */

    img {
      height: 14rem;
    }
  }

  h2 {
    font-size: 25pt;
    color: #303952;
  }

  h3 {
    width: 16rem;
    font-size: 16pt;
    color: #f3a683;

    span {
      color: #303952;
      font-size: 10pt;
    }
  }
`;
