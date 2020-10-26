// @ts-ignore
import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  restartGame,
} from "./gameSlice";
import { HealthBar } from "./HealthBar";
import { Dice } from "./Dice";
import { BattleText } from "./BattleText";

import {
  BattleFieldContainer,
  CharacterInfoContainer,
  CharacterMainInfoContainer,
  SpriteContainer,
  CharacterImage,
  CharacterNameContainer,
  BattleSection,
  ButtonContainer,
  Button,
} from "./styledComponents";

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

  const isGameFinished = playerHealth <= 0 || enemyHealth <= 0;

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
          <BattleText
            damageAmount={damageAmount}
            playerHealth={playerHealth}
            enemyHealth={enemyHealth}
            isRolling={isDiceRolling}
            isGameFinished={isGameFinished}
          />
          <ButtonContainer>
            <Button
              disabled={isDiceRolling}
              onClick={() => {
                return isGameFinished
                  ? dispatch(restartGame())
                  : dispatch(rollDice());
              }}
            >
              {isGameFinished ? "RESTART" : "ATTACK"}
            </Button>
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
