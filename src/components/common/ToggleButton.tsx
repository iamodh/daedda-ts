import React, { useState } from "react";
import styled from "styled-components";

type ToggleButtonProps = {
  children: React.ReactNode;
};

const Container = styled.button<{ $isActive: boolean }>`
  border: ${(props) => {
      return props.$isActive
        ? props.theme.colors.primary[300]
        : props.theme.colors.gray[300];
    }}
    solid 2px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  transition: border 0.1s ease;
  padding: 6px 12px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

const ToggleButton = ({ children }: ToggleButtonProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Container
      $isActive={isActive}
      onClick={handleClick}
      aria-pressed={isActive}
    >
      {children}
    </Container>
  );
};

export default ToggleButton;
