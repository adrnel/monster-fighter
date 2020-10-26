// @ts-ignore
import React from "react";
import styled, { keyframes, css } from "styled-components";

interface StringArray {
  [index: number]: string;
}

const contentMap: StringArray = {
  1: "\\2680",
  2: "\\2681",
  3: "\\2682",
  4: "\\2683",
  5: "\\2684",
  6: "\\2685",
};

const DiceContainer = styled.div`
  padding: 0 20px;
`;

const rolling = keyframes`
  0% {content:'\\2680';}
  20% {content:'\\2681';}
  40% {content:'\\2682';}
  60% {content:'\\2683';}
  80% {content:'\\2684';}
  100% {content:'\\2685';}
`;

const Die = styled.div<{ value?: number; isRolling?: boolean }>`
  font-size: 71px;
  font-weight: 800;

  ::after {
    content: "${(props) => (props.value ? contentMap[props.value] : "\\2680")}";
    ${({ isRolling }) =>
      isRolling &&
      css`
        content: "";
        animation: ${rolling} 2s linear infinite;
      `};
  }
`;

interface DiceObject {
  dieOneValue: number;
  dieTwoValue: number;
  isRolling: boolean;
}

export const Dice: React.FC<DiceObject> = ({
  dieOneValue,
  dieTwoValue,
  isRolling,
}: DiceObject) => {
  return (
    <DiceContainer>
      <Die value={dieOneValue} isRolling={isRolling} />
      <Die value={dieTwoValue} isRolling={isRolling} />
    </DiceContainer>
  );
};
