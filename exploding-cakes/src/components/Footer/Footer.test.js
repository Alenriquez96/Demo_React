import React from "react";
import Footer from "./Footer";
import { render, screen } from '@testing-library/react';
import { themeContext } from '../../context/themeContext';

describe("Footer", () => {

  const themeData = {
    theme: "",
    toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
  }
  test("matches snapshot", () => {
    render(
    <themeContext.Provider value={themeData}>
      <Footer/>
    </themeContext.Provider>
    )
    expect(screen).toMatchSnapshot();
  });

  test("footer text in the document", () => {
    render(
          <themeContext.Provider value={themeData}>
            <Footer />
          </themeContext.Provider>
          );
    const linkElement = screen.getByText(/Esto es el Footer/i);
    expect(linkElement).toBeInTheDocument();
  });

});
