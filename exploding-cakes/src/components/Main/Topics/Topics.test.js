import React from "react";
import Topics from "./Topics";
import { render, renderHook, screen } from '@testing-library/react';

describe("Topics", () => {
  test("matches snapshot", () => {
    render(<Topics />);
    expect(screen).toMatchSnapshot();
  });
});
