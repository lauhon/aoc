import { input } from "./input";
import { getFirst, getLast, replaceWord } from "./utils";

export const day1 = () => {
  let res = 0;

  for (const line of input) {
    const edited = replaceWord(line);
    const first = getFirst(edited);
    const last = getLast(edited);

    res += +`${first}${last}`;
  }

  console.log(res);
};
