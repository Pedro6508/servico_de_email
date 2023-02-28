import { simple_ordering } from "./main.ts";

Deno.bench(function order() {
  simple_ordering([9, 2, 3, 4, 2, 0]);
});

// Deno.bench(function addBig() {
//   add(2 ** 32, 2 ** 32);
// });
