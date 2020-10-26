import styled from "styled-components";
import { DESKTOP_BREAK_POINT } from "./constants";

export const BattleFieldContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  flex-direction: column-reverse;

  @media only screen and (min-width: ${DESKTOP_BREAK_POINT}px) {
    flex-direction: row;
  }
`;

export const CharacterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterMainInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CharacterNameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SpriteContainer = styled.div`
  padding: 0 20px;
`;

export const CharacterImage = styled.img`
  max-height: 201px;
`;

export const BattleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.button<{ disabled: boolean }>`
  align-self: center;
  background-color: ${(props) => (props.disabled ? "grey" : "green")};
  height: 40px;
  padding: 10px 30px;
  border-radius: 20px;
  margin-bottom: 40px;
    
  @media only screen and (min-width: ${DESKTOP_BREAK_POINT}px) {
    margin-bottom: 0;
  }
}
`;
