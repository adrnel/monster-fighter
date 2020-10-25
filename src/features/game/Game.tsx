import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components'
import warrior from '../../warrior.png';
import ogre from '../../ogre.png';
import {
  selectCount,
} from './gameSlice';

const BattleFieldContainer = styled.div`
  display: flex;
  
  justify-content: space-around;
  height: 200px;
`;

const CharacterInfoContainer = styled.div`
  display: flex;
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
    content:'\\2680';
  }
`;

const BattleTextContainer = styled.div`
  align-self: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 20px;
  
  justify-content: center;
`;

export function Game() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <BattleFieldContainer>
        <CharacterInfoContainer>
          <SpriteContainer>
            <CharacterImage src={warrior}/>
          </SpriteContainer>
          <HealthContainer>
            <HealthBarBox>

            </HealthBarBox>
          </HealthContainer>
          <DiceContainer>
            <Dice></Dice>
            <Dice></Dice>
          </DiceContainer>
        </CharacterInfoContainer>
        <BattleTextContainer>You hit for a 6</BattleTextContainer>

        <CharacterInfoContainer>
          <DiceContainer>
            <Dice></Dice>
            <Dice></Dice>
          </DiceContainer>

          <HealthContainer>


            <HealthBarBox>

            </HealthBarBox>
          </HealthContainer>
          <SpriteContainer>
            <CharacterImage src={ogre}/>
          </SpriteContainer>
        </CharacterInfoContainer>
      </BattleFieldContainer>
      <ButtonContainer><button>attack</button></ButtonContainer>
    </div>
  );
}
