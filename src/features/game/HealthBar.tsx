// @ts-ignore
import React from "react";
import styled from "styled-components";

const HealthContainer = styled.div`
  padding: 0 20px;
`;

const HealthBarBox = styled.div`
  background-color: #ccc;
  height: 100%;
  width: 30px;
  margin: 0 auto;
  border: solid 1px #aaa;
`;

const HealthBarGreenHealth = styled.div<{ health: number }>`
  background-color: #007f00;
  height: ${(props) => (props.health ? props.health : 100)}%;
  width: 31px;
  position: relative;
  bottom: 1px;
  left: 0px;
  transform: rotatex(180deg);
  transform-origin: top;
`;

interface HealthBarObject {
  healthAmount: number;
}

export const HealthBar: React.FC<HealthBarObject> = ({
  healthAmount,
}: HealthBarObject) => {
  return (
    <HealthContainer>
      <HealthBarBox />
      <HealthBarGreenHealth health={healthAmount} />
    </HealthContainer>
  );
};
