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

export function swap_sort(array: Array<number>): Array<number> {
  let i: number, record: number, count = 0;
  let end = false;

  while (end == false) {
    count = 0;

    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        record = array[i];
        array[i] = array[i + 1];
        array[i + 1] = record;
        count++;
      }
    }

    if (count == 0) {
      end = true;
    }
  }

  for (i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      record = array[i];
      array[i] = array[i + 1];
      array[i + 1] = record;

      array = swap_sort(array);
    }
  }

  return array;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(
    "Array inicial: [2, 6, 1, 9, 0, -1] | Array final: ",
    swap_sort([2, 6, 1, 9, 0, -1]),
  );
}
