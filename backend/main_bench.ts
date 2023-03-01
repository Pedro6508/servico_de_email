import { swap_sort } from "./main.ts";

Deno.bench(function order() {
  swap_sort([9, 2, 3, 4, 2, 0]);
});

// Deno.bench(function addBig() {
//   add(2 ** 32, 2 ** 32);
// });
