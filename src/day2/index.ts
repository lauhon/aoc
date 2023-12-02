import { inputs } from "./input";

// const max: { [key: string]: number } = {
//   red: 12,
//   green: 13,
//   blue: 14,
// };

export const day2 = () => {
  let sum = 0;
  for (const line of inputs) {
    let possible = true;
    const config: { [key: string]: number } = { blue: 0, red: 0, green: 0 };

    const [gamex, games] = line.split(":");
    const sets = games.split(";");

    const [_, gameId] = gamex.split(" ");

    for (const set of sets) {
      const multiColorCubes = set.split(",");

      for (const multiColorCube of multiColorCubes) {
        const [number, color] = multiColorCube.trim().split(" ");

        if (Number(number) > config[color]) {
          config[color] = Number(number);
        }
      }
    }

    // if (possible) {
    //   sum += Number(gameId);
    // }

    sum += config.blue * config.red * config.green;
  }

  console.log(sum);
};
