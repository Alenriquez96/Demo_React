import React from "react";
import Delivery from "./delivery";
import { render, renderHook, screen } from '@testing-library/react';

describe("Delivery", () => {
  test("matches snapshot", () => {
    render(<Delivery />);
    expect(screen).toMatchSnapshot();
  });
});
