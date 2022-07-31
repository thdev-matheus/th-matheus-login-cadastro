import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || " 50px"};

  padding: ${(props) => props.padding};

  border-radius: ${(props) => props.borderRadius};
  outline: ${(props) => props.outline};
  outline-offset: ${(props) => props.outlineOffset};

  box-shadow: ${(props) => props.boxShadow};

  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};

  transition: background-color 0.6s;

  &:hover {
    background-color: ${(props) => props.bgColorHover};
    color: ${(props) => props.colorHover};

    cursor: pointer;

    transition: background-color 0.6s;
  }
`;

<Button
  width=""
  height=""
  padding=""
  borderRadius=""
  outline=""
  outlineOffset=""
  boxShadow=""
  fontSize=""
  fontWeight=""
  bgColor=""
  color=""
  bgColorHover=""
  colorHover=""
>
  TextButton
</Button>;
