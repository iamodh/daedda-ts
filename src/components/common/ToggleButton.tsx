import styled from "styled-components";

type ToggleButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  value: string;
  onClick: (value: string) => void;
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

const ToggleButton = ({
  children,
  isActive,
  value,
  onClick,
}: ToggleButtonProps) => {
  return (
    <Container
      $isActive={isActive}
      aria-pressed={isActive}
      onClick={() => onClick(value)}
    >
      {children}
    </Container>
  );
};

export default ToggleButton;
