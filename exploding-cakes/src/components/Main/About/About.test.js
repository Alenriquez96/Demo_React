import React from "react";
import About from "./About";
import { render, screen } from '@testing-library/react';

describe("About", () => {
  test("matches snapshot", () => {
    render(<About />);
    expect(screen).toMatchSnapshot();
  });
});
