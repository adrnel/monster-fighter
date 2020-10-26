// @ts-ignore
import React from "react";
import styled from "styled-components";
import {
  STARTING_PLAYER_HEALTH,
  STARTING_ENEMY_HEALTH,
  textMap,
} from "./constants";

const BattleTextContainer = styled.div`
  min-height: 205px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  text-align: center;
  justify-content: center;
`;

const BattleFinishedTextContainer = styled.div<{ isWinner: boolean }>`
  color: ${(props) => (props.isWinner ? "green" : "red")};
`;

interface BattleTextObject {
  damageAmount: number;
  playerHealth: number;
  enemyHealth: number;
  isRolling: boolean;
  isGameFinished: boolean;
}

export const BattleText: React.FC<BattleTextObject> = ({
  damageAmount,
  playerHealth,
  enemyHealth,
  isRolling,
  isGameFinished,
}: BattleTextObject) => {
  const isGameStarted =
    playerHealth !== STARTING_PLAYER_HEALTH ||
    enemyHealth !== STARTING_ENEMY_HEALTH;
  let finishText = enemyHealth <= 0 ? textMap.PLAYER_WIN : textMap.ENEMY_WIN;
  let hitText = textMap.START_GAME;
  if (damageAmount === 0 && isGameStarted) hitText = textMap.DRAW_HIT;
  if (damageAmount > 0 && isGameStarted) hitText = textMap.PLAYER_HIT;
  if (damageAmount < 0 && isGameStarted) hitText = textMap.ENEMY_HIT;
  if (isRolling) hitText = textMap.DICE_ROLLING;
  return (
    <BattleTextContainer>
      <div>
        <h2>{`${hitText}${damageAmount ? Math.abs(damageAmount) : ""}`}</h2>
      </div>
      {isGameFinished && (
        <BattleFinishedTextContainer isWinner={enemyHealth <= 0}>
          <h1>{finishText}</h1>
        </BattleFinishedTextContainer>
      )}
    </BattleTextContainer>
  );
};
