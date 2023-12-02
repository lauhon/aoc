import { directions } from "./directions";

export const day1 = () => {
  let floor = 0;

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "(") {
      floor++;
    } else {
      floor--;
    }

    if (floor === -1) {
      console.log("Santa entered the basement at position", i + 1);
    }
  }

  console.log(floor);
};
