import React from 'react';
import styled from 'styled-components'
import { Game } from './features/game/Game'
const GameContainer = styled.div`
  display: flex;
  padding: 20px;
      justify-content: center;
`;
const GameWindow = styled.div`
  border: 1px black solid;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  padding: 20px;
  
    justify-content: center;
`;

function App() {
  return (
    <GameContainer>
        <GameWindow>
          <TitleContainer>
              <h1>Battle Simulator</h1>
          </TitleContainer>
            <Game></Game>
        </GameWindow>
    </GameContainer>
  );
}

export default App;
