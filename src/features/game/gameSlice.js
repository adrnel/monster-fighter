import { createSlice } from "@reduxjs/toolkit";
import { STARTING_PLAYER_HEALTH, STARTING_ENEMY_HEALTH } from "./constants";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerDiceOneValue: 0,
    playerDiceTwoValue: 0,
    playerHealth: STARTING_PLAYER_HEALTH,
    enemyDiceOneValue: 0,
    enemyDiceTwoValue: 0,
    enemyHealth: STARTING_ENEMY_HEALTH,
    damageAmount: 0,
    isDiceRolling: false,
  },
  reducers: {
    startRollingDice: (state) => {
      state.isDiceRolling = true;
      state.damageAmount = 0;
    },
    setDiceValue: (state, action) => {
      state.isDiceRolling = false;
      state.playerDiceOneValue = action.payload.diceOne;
      state.playerDiceTwoValue = action.payload.diceTwo;
      state.enemyDiceOneValue = action.payload.diceThree;
      state.enemyDiceTwoValue = action.payload.diceFour;
      const combinedDiceAmount =
        action.payload.diceOne +
        action.payload.diceTwo -
        action.payload.diceThree -
        action.payload.diceFour;
      state.damageAmount = combinedDiceAmount;
      state.playerHealth =
        combinedDiceAmount < 0
          ? state.playerHealth + combinedDiceAmount
          : state.playerHealth;
      state.enemyHealth =
        combinedDiceAmount > 0
          ? state.enemyHealth - combinedDiceAmount
          : state.enemyHealth;
    },
    restartGame: (state) => {
      state.playerDiceOneValue = 0;
      state.playerDiceTwoValue = 0;
      state.playerHealth = STARTING_PLAYER_HEALTH;
      state.enemyDiceOneValue = 0;
      state.enemyDiceTwoValue = 0;
      state.enemyHealth = STARTING_ENEMY_HEALTH;
      state.damageAmount = false;
      state.isDiceRolling = false;
    },
  },
});

export const {
  startRollingDice,
  setDiceValue,
  restartGame,
} = gameSlice.actions;

export const rollDice = (amount) => (dispatch) => {
  dispatch(startRollingDice(amount));
  setTimeout(() => {
    dispatch(
      setDiceValue({
        diceOne: getRandomDiceValue(),
        diceTwo: getRandomDiceValue(),
        diceThree: getRandomDiceValue(),
        diceFour: getRandomDiceValue(),
      })
    );
  }, 2000);
};

const getRandomDiceValue = () => Math.floor(Math.random() * 6) + 1;

export const selectPlayerDiceOneValue = (state) =>
  state.game.playerDiceOneValue;
export const selectPlayerDiceTwoValue = (state) =>
  state.game.playerDiceTwoValue;
export const selectPlayerHealth = (state) => state.game.playerHealth;
export const selectEnemyDiceOneValue = (state) => state.game.enemyDiceOneValue;
export const selectEnemyDiceTwoValue = (state) => state.game.enemyDiceTwoValue;
export const selectEnemyHealth = (state) => state.game.enemyHealth;
export const selectDamageAmount = (state) => state.game.damageAmount;
export const selectIsDiceRolling = (state) => state.game.isDiceRolling;

export default gameSlice.reducer;
