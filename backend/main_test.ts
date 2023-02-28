import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { simple_ordering } from "./main.ts";

Deno.test(function orderTest() {
  assertEquals(simple_ordering([2, 3, 5, 6, 0, -1, 10]), [
    -1,
    0,
    2,
    3,
    5,
    6,
    10,
  ]);
});
