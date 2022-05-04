import React from "react";
import Nav from "./Nav";
import { render, screen } from '@testing-library/react';
import { themeContext } from '../../../context/themeContext';
import {BrowserRouter} from 'react-router-dom';

describe("Nav", () => {

  const themeData = {
    theme: "",
    toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
  }

  test("matches snapshot", () => {
    render(
      <themeContext.Provider value={themeData}>
        <BrowserRouter>
           <Nav />
        </BrowserRouter>
      </themeContext.Provider>
    )
    expect(screen).toMatchSnapshot();
  });
});
