import React from "react";
import Contact from "./Contact";
import { render, screen } from '@testing-library/react';

describe("Contact", () => {
  test("matches snapshot", () => {
    render(<Contact />);
    expect(screen).toMatchSnapshot();
  });
});
