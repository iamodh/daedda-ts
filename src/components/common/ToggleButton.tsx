import React from "react";
import styled from "styled-components";

type ToggleButtonProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  border: ${(props) => props.theme.colors.gray[300]} solid 2px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 6px 12px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;
`;

const ToggleButton = ({ children }: ToggleButtonProps) => {
  return <Container>{children}</Container>;
};

export default ToggleButton;
