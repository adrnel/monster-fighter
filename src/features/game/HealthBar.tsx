// @ts-ignore
import React from "react";
import styled from "styled-components";
import { STARTING_PLAYER_HEALTH, STARTING_ENEMY_HEALTH } from "./constants";

const HealthContainer = styled.div`
  padding: 0 20px;
`;

const HealthText = styled.p`
  margin: 0;
  text-align: center;
  height: 15%;
`;

const HealthBarBox = styled.div`
  background-color: #ccc;
  height: calc(85% - 2px);
  width: 30px;
  margin: 0 auto;
  border: solid 1px #aaa;
`;

const HealthBarGreenHealth = styled.div<{ health: number }>`
  background-color: #007f00;
  height: calc(${(props) => (props.health ? props.health : 0)}% - 1px);
  width: 31px;
  position: relative;
  bottom: 1px;
  left: 0px;
  transform: rotatex(180deg);
  transform-origin: top;
  transition: height 0.25s linear;
`;

interface HealthBarObject {
  healthAmount: number;
  isPlayer?: boolean;
}

export const HealthBar: React.FC<HealthBarObject> = ({
  healthAmount,
  isPlayer,
}: HealthBarObject) => {
  const healthPercentage = isPlayer
    ? (healthAmount * 85) / STARTING_PLAYER_HEALTH
    : (healthAmount * 85) / STARTING_ENEMY_HEALTH;
  return (
    <HealthContainer>
      <HealthText>{healthAmount > 0 ? healthAmount : 0}</HealthText>
      <HealthBarBox />
      <HealthBarGreenHealth health={healthPercentage} />
    </HealthContainer>
  );
};
