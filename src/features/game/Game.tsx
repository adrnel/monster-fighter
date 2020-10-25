// @ts-ignore
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import warrior from "../../warrior.png";
import enemy from "../../enemy.png";
import {
  selectPlayerDiceOneValue,
  selectPlayerDiceTwoValue,
  selectPlayerHealth,
  selectEnemyDiceOneValue,
  selectEnemyDiceTwoValue,
  selectEnemyHealth,
  selectIsDiceRolling,
  selectDamageAmount,
  rollDice,
} from "./gameSlice";

const BattleFieldContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`;

const CharacterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterMainInfoContainer = styled.div`
  display: flex;
`;

const CharacterNameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpriteContainer = styled.div`
  padding: 0 20px;
`;

const CharacterImage = styled.img`
  max-height: 201px;
`;

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

const Dice = styled.div`
  font-size: 71px;
  font-weight: 800;

  ::after {
    content: "\\2680";
  }
`;

const BattleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const BattleTextContainer = styled.div`
  min-height: 205px;
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button`
  align-self: center;
`;

export function Game() {
  const playerDiceOneValue = useSelector(selectPlayerDiceOneValue);
  const playerDiceTwoValue = useSelector(selectPlayerDiceTwoValue);
  const playerHealth = useSelector(selectPlayerHealth);
  const enemyDiceOneValue = useSelector(selectEnemyDiceOneValue);
  const enemyDiceTwoValue = useSelector(selectEnemyDiceTwoValue);
  const enemyHealth = useSelector(selectEnemyHealth);
  const damageAmount = useSelector(selectDamageAmount);
  const isDiceRolling = useSelector(selectIsDiceRolling);
  const dispatch = useDispatch();

  return (
    <div>
      <BattleFieldContainer>
        <CharacterInfoContainer>
          <CharacterMainInfoContainer>
            <SpriteContainer>
              <CharacterImage src={warrior} />
            </SpriteContainer>
            <HealthContainer>
              <HealthBarBox></HealthBarBox>
              <HealthBarGreenHealth
                health={playerHealth}
              ></HealthBarGreenHealth>
            </HealthContainer>
            <DiceContainer>
              <Dice></Dice>
              <Dice></Dice>
            </DiceContainer>
          </CharacterMainInfoContainer>
          <CharacterNameContainer>
            <h1>player</h1>
          </CharacterNameContainer>
        </CharacterInfoContainer>

        <BattleSection>
          <BattleTextContainer>
            <h2>You hit for a 6</h2>
          </BattleTextContainer>
          <ButtonContainer>
            <Button onClick={() => dispatch(rollDice())}>attack</Button>
          </ButtonContainer>
        </BattleSection>

        <CharacterInfoContainer>
          <CharacterMainInfoContainer>
            <DiceContainer>
              <Dice></Dice>
              <Dice></Dice>
            </DiceContainer>
            <HealthContainer>
              <HealthBarBox></HealthBarBox>
              <HealthBarGreenHealth health={enemyHealth}></HealthBarGreenHealth>
            </HealthContainer>
            <SpriteContainer>
              <CharacterImage src={enemy} />
            </SpriteContainer>
          </CharacterMainInfoContainer>
          <CharacterNameContainer>
            <h1>enemy</h1>
          </CharacterNameContainer>
        </CharacterInfoContainer>
      </BattleFieldContainer>
    </div>
  );
}
