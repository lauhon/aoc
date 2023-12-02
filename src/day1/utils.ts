export const getFirst = (input: string) => {
  for (const letter of input) {
    if (!isNaN(parseInt(letter))) {
      return letter;
    }
  }

  return "";
};

export const getLast = (input: string) => {
  for (let i = input.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(input[i]))) {
      return input[i];
    }
  }

  return "";
};

export const config = {
  threeight: 38,
  nineight: 98,
  twone: 21,
  eightwo: 82,
  oneight: 18,
  fiveight: 58,
  sevenine: 79,
  eighthree: 83,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export const replaceWord = (line: string) => {
  let newWord = line;

  for (const [key, value] of Object.entries(config)) {
    newWord = newWord.replaceAll(key, value.toString());
  }

  return newWord;
};
