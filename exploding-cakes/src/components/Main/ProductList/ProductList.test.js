import React from "react";
import ProductList from "./ProductList";
import { render, screen } from '@testing-library/react';

describe("ProductList", () => {
  test("matches snapshot", () => {
    render(<ProductList />);
    expect(screen).toMatchSnapshot();
  });
});
