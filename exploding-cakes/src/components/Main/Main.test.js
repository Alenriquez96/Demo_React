import React from "react";
import Main from "./Main";
import { render, screen } from '@testing-library/react';
import { themeContext } from '../../context/themeContext';
import { userContext } from "../../context/userContext";
import { BrowserRouter } from 'react-router-dom'

describe("Main", () => {

  const userData = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user =''
  }

  const themeData = {
    theme: "",
    toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
  }

  test("matches snapshot", () => {
    render(
      <themeContext.Provider value={themeData}>
        <BrowserRouter>
          <userContext.Provider value={userData}>
            <Main /> 
          </userContext.Provider>
        </BrowserRouter>
      </themeContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
