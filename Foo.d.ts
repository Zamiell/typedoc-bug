import { Bar } from "./Bar";

declare global {
  interface Foo {
    foo(): Bar;
  }
}
