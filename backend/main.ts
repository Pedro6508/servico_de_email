export class CustomError extends Error {
  statusCode = 400;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  getErrorMessage() {
    return "Custom Error: " + this.message;
  }
}

interface Number {
  value: number;
  ignore: boolean;
}

function arr_number_to_Number(array: Array<number>): Array<Number> {
  let result: Array<Number> = [];
  let index: number;

  for (index = 0; index < array.length; index++) {
    result.push({
      value: array[index],
      ignore: false,
    });
  }

  return result;
}

function take_minor(array: Array<Number>): Number {
  let minor: [Number, number] = [array[0], 0];
  let index: number;

  for (index = 0; index < array.length; index++) {
    if (
      array[index].ignore == false &&
      array[index].value < minor[0].value
    ) {
      minor[0] = array[index];
      minor[1] = index;
    }
  }

  array[minor[1]].ignore = true;
  return minor[0];
}

export function simple_ordering(
  array: Array<number>,
): Array<number> | CustomError {
  let result: Array<number> = [];
  let Number_array = arr_number_to_Number(array);
  let index: number;

  for (index = 0; index < Number_array.length; index++) {
    let minor = take_minor(Number_array);

    if (minor.ignore == false) {
      result.push(minor.value);
    } else {
      return new CustomError("Number Mark Error!");
    }
  }

  return array;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(
    "Array inicial: [2, 6, 1, 9, 0, -1] | Array final: ",
    simple_ordering([2, 6, 1, 9, 0, -1]),
  );
}
