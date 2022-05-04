import React from "react";
import PokeList from "./PokeList";
import { render, screen } from '@testing-library/react';

describe("PokeList", () => {
  test("matches snapshot", () => {
    render(<PokeList />);
    expect(screen).toMatchSnapshot();
  });
});
