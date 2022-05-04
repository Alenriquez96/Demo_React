import { render } from "@testing-library/react";
import React from "react";
import Pokemon from "./Pokemon";

describe("Pokemon", () => {
  test("matches snapshot", () => {
    render(<Pokemon />);
    expect(screen).toMatchSnapshot();
  });
});
