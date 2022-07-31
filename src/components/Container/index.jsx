import styled from "styled-components";

export const Container = styled.main`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};

  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};

  background-color: #303952;
  color: #f0f8ff;

  h1 {
    font-size: 30pt;
  }
`;

<Container
  width=""
  height=""
  display=""
  flexDirection=""
  justifyContent=""
  alignItems=""
  gap=""
></Container>;
