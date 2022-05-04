import React from "react";
import ProductItem from "./ProductItem";
import { render, screen } from '@testing-library/react';
import cakes from "../cakes.json"

describe("ProductItem", () => {
  test("matches snapshot", () => {
    render(<ProductItem data={cakes}/>);
    expect(screen).toMatchSnapshot();
  });

  test('delete Button to be visible', () => {
    render(<ProductItem data={cakes}/>);
    const deleteButton = screen.queryByText('Borrar');
    expect(deleteButton).toBeVisible();
  })
});
