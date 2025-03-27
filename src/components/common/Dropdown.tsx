import useModalDismiss from "@hooks/useModalDismiss";
import { useRef, useState } from "react";
import styled from "styled-components";

type OptionTypes = {
  name: string;
  value: string;
};

type DropdownProps = {
  options: OptionTypes[];
  width: string;
};

const Container = styled.div<{ $width: string }>`
  position: relative;
  width: ${({ $width }) => {
    console.log($width);
    return $width;
  }};
  font-size: ${(props) => props.theme.fontSizes.sm};

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

const Button = styled.button<{ $isOpen: boolean }>`
  border: ${(props) => {
      return props.$isOpen
        ? props.theme.colors.primary[300]
        : props.theme.colors.gray[300];
    }}
    solid 2px;
  width: 100%;
  text-align: center;
  padding: 6px 0;
  font-size: ${(props) => props.theme.fontSizes.sm};
  border-radius: ${(props) =>
    props.$isOpen
      ? `${props.theme.borderRadius.md} ${props.theme.borderRadius.md} 0 0`
      : `${props.theme.borderRadius.md}`};
  transition: border-radius 0.2s ease;

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

const Options = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  opacity: ${({ $isOpen }) => ($isOpen ? "100" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.2s ease;

  li {
    white-space: nowrap;
    text-align: center;
    padding: 6px 0;
    cursor: pointer;
    border: ${(props) => {
        return props.$isOpen
          ? props.theme.colors.primary[300]
          : props.theme.colors.gray[300];
      }}
      solid 2px;
    border-top: 0;
    background-color: ${(props) => props.theme.colors.white};

    &:last-child {
      border-radius: ${({ theme }) =>
        `0 0 ${theme.borderRadius.md} ${theme.borderRadius.md}`};
    }
  }
`;

const Dropdown = ({ options, width }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  useModalDismiss(dropdownRef, () => setIsOpen(false));

  return (
    <Container $width={width}>
      <Button
        ref={dropdownRef}
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {options[0].name}
      </Button>
      <Options $isOpen={isOpen}>
        {options.slice(1).map((option, index) => (
          <li key={index} onClick={() => setIsOpen(false)}>
            {option.name}
          </li>
        ))}
      </Options>
    </Container>
  );
};

export default Dropdown;
