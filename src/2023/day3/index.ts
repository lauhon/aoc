import { schematics } from "./schematics";

export const day3 = () => {
  const matrix: string[][] = new Array(schematics.length);

  for (const [i, line] of schematics.entries()) {
    matrix[i] = new Array(line.length);
    for (const [j, character] of line.split("").entries()) {
      matrix[i][j] = character;
    }
  }

  let sum = 0;

  for (const [i, line] of schematics.entries()) {
    let numStr = "";
    let num = 0;

    for (const [j, character] of line.split("").entries()) {
      if (!isNaN(parseInt(character))) {
        // If is number we add to string to build the number
        numStr = `${numStr}${character}`;
      } else if (numStr !== "") {
        // If is not a number anymore and we have something in the string builder
        num = parseInt(numStr);
      }

      if (num !== 0) {
        // If we built a number we check for neighbors

        const val = findSumValue(num, matrix, i, j);

        if (val !== 0) {
          //   console.log({ val, sum, i });
          sum = sum + val;
        }

        numStr = "";
        num = 0;
      }
    }
  }

  console.log(sum);
};

const findSumValue = (
  num: number,
  matrix: string[][],
  i: number,
  j: number
) => {
  const length = num.toString().length;

  // check if prev char in same row is symbol
  if (isSymbol(matrix[i][j - (length + 1)])) {
    return num;
  }

  //..45.
  //

  // check if next char in same row is symbol
  if (isSymbol(matrix[i][j])) {
    return num;
  }

  const lastRow = matrix[i - 1];
  const nextRow = matrix[i + 1];

  for (let x = 0; x < length + 2; x++) {
    if (lastRow && isSymbol(lastRow[j - x])) {
      return num;
    }

    if (nextRow && isSymbol(nextRow[j - x])) {
      return num;
    }
  }

  //   if (isNaN(num)) {
  //     console.log(num, i, j);
  //   }

  const indexStart = j - (length + 1);

  if (lastRow && lastRow.slice(indexStart, j + 1).length === 0) {
    console.log({ indexStart, j, length, num, i });
  }

  lastRow && console.log(lastRow.slice(indexStart, j + 1));

  console.log((matrix[i][j - (length + 1)] + num + matrix[i][j]).split(""));

  nextRow && console.log(nextRow.slice(indexStart, j + 1));

  console.log("---------------------------");

  return 0;
};

const isSymbol = (char: string) => {
  if (char === ".") {
    return false;
  }

  if (!char || Number.isInteger(parseInt(char))) {
    // console.log(char);

    return false;
  }

  return true;
};

// TODO check if lenght+1 and index +1 is better than index and length+2
