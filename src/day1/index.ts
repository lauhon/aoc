import { input } from "./input";
import { getFirst, getLast, replaceWord } from "./utils";

const day1 = () => {
  console.log("Hello via Bun!");

  let res = 0;

  for (const line of input) {
    const edited = replaceWord(line);
    const first = getFirst(edited);
    const last = getLast(edited);

    console.log({ line, edited });

    res += +`${first}${last}`;
  }

  console.log(res);
};
