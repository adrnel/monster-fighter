import React from "react";
import { render } from "@testing-library/react";
import { BattleText } from "../BattleText";
import { STARTING_PLAYER_HEALTH, STARTING_ENEMY_HEALTH } from "../constants";

test("displays starting text when neither player is damaged", () => {
  const { getByText } = render(
    <BattleText
      damageAmount={0}
      playerHealth={STARTING_PLAYER_HEALTH}
      enemyHealth={STARTING_ENEMY_HEALTH}
      isRolling={false}
      isGameFinished={false}
    />
  );

  expect(getByText(/PRESS ATTACK TO START/i)).toBeInTheDocument();
});

test("displays draw text when a player has lost health and damage amount is 0", () => {
  const { getByText } = render(
    <BattleText
      damageAmount={0}
      playerHealth={STARTING_PLAYER_HEALTH - 5}
      enemyHealth={STARTING_ENEMY_HEALTH}
      isRolling={false}
      isGameFinished={false}
    />
  );

  expect(getByText(/NEITHER PLAYER TOOK DAMAGE/i)).toBeInTheDocument();
});

test("displays player hit text with correct damage amount when damage amount is positive ", () => {
  const { getByText } = render(
    <BattleText
      damageAmount={7}
      playerHealth={STARTING_PLAYER_HEALTH}
      enemyHealth={STARTING_ENEMY_HEALTH - 7}
      isRolling={false}
      isGameFinished={false}
    />
  );

  expect(getByText(/YOU HIT FOR 7/i)).toBeInTheDocument();
});

test("displays enemy hit text with correct damage amount when damage amount is negative ", () => {
  const { getByText } = render(
    <BattleText
      damageAmount={-8}
      playerHealth={STARTING_PLAYER_HEALTH - 8}
      enemyHealth={STARTING_ENEMY_HEALTH}
      isRolling={false}
      isGameFinished={false}
    />
  );

  expect(getByText(/ENEMY HIT YOU FOR 8/i)).toBeInTheDocument();
});

test("displays rolling dice text when the is rolling boolean is true ", () => {
  const { getByText } = render(
    <BattleText
      damageAmount={-8}
      playerHealth={STARTING_PLAYER_HEALTH - 8}
      enemyHealth={STARTING_ENEMY_HEALTH}
      isRolling={true}
      isGameFinished={false}
    />
  );

  expect(getByText(/ROLLING DICE/i)).toBeInTheDocument();
});

test("displays player win text when the enemy has no health ", () => {
  const { getByText } = render(
    <BattleText
      damageAmount={-8}
      playerHealth={STARTING_PLAYER_HEALTH}
      enemyHealth={STARTING_ENEMY_HEALTH - STARTING_ENEMY_HEALTH}
      isRolling={false}
      isGameFinished={true}
    />
  );

  expect(getByText(/YOU WIN/i)).toBeInTheDocument();
});

test("displays enemy win  text when the player has no health ", () => {
  const { getByText } = render(
    <BattleText
      damageAmount={-8}
      playerHealth={STARTING_PLAYER_HEALTH - STARTING_PLAYER_HEALTH}
      enemyHealth={STARTING_ENEMY_HEALTH}
      isRolling={false}
      isGameFinished={true}
    />
  );

  expect(getByText(/GAME OVER/i)).toBeInTheDocument();
});
