import React from "react";
import Tasters from "./Tasters";
import { render, screen } from '@testing-library/react';

describe("Tasters", () => {
  test("matches snapshot", () => {
    render(<Tasters />);
    expect(screen).toMatchSnapshot();
  });
});
