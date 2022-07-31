import styled from "styled-components";

export const Form = styled.form`
  width: ${(props) => props.width || "22rem"};
  height: ${(props) => props.height || "35rem"};

  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || "7px"};

  text-align: center;

  border-radius: 35px 0;
  outline: 2px solid #303952;
  outline-offset: -10px;

  box-shadow: -5px 5px 5px 0 #00000080;

  background-color: #7f8eb8;

  h2 {
    margin-bottom: 10px;

    color: #f0f8ff;

    font-size: 25pt;
  }

  .inputText {
    width: 280px;
    height: 40px;

    padding-left: 10px;

    box-shadow: -2px 2px 5px 0 #30395270;

    transition: background-color 0.6s;

    ::placeholder {
      color: #30395250;
    }

    :focus {
      background-color: #c8cee0dd;
      transition: background-color 0.6s;
    }
  }

  div {
    width: 280px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    .inputText {
      width: 50%;
    }
  }

  p {
    margin-top: 10px;
  }

  a {
    color: #f19066;
  }

  small {
    color: #a10803;
  }
`;
