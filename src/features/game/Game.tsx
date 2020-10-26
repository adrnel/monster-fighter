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
import { HealthBar } from "./HealthBar";
import { Dice } from "./Dice";

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
            <HealthBar healthAmount={playerHealth} />
            <Dice
              dieOneValue={playerDiceOneValue}
              dieTwoValue={playerDiceTwoValue}
              isRolling={isDiceRolling}
            />
          </CharacterMainInfoContainer>
          <CharacterNameContainer>
            <h1>player</h1>
          </CharacterNameContainer>
        </CharacterInfoContainer>

        <BattleSection>
          <BattleTextContainer>
            <h2>You hit for a {damageAmount}</h2>
          </BattleTextContainer>
          <ButtonContainer>
            <Button onClick={() => dispatch(rollDice())}>attack</Button>
          </ButtonContainer>
        </BattleSection>

        <CharacterInfoContainer>
          <CharacterMainInfoContainer>
            <Dice
              dieOneValue={enemyDiceOneValue}
              dieTwoValue={enemyDiceTwoValue}
              isRolling={isDiceRolling}
            />
            <HealthBar healthAmount={enemyHealth} />
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
