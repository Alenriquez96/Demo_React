import { render } from "@testing-library/react";
import React from "react";
import Chefs from "./Chefs";

describe("Chefs", () => {
  test("matches snapshot", () => {
    render(<Chefs />);
    expect(screen).toMatchSnapshot();
  });
});
