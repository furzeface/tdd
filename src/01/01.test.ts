import { X } from "./01";

const input = `42`;

describe("test", () => {
  test("returning the test input", () => {
    expect(X(input)).toBe(42);
	});
});
