import React from "react";
import Header from "./Header";
import { render, screen } from '@testing-library/react';
import { themeContext } from '../../context/themeContext';
import { userContext } from "../../context/userContext";
import { BrowserRouter } from 'react-router-dom';




describe("Header", () => {

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
            <Header /> 
          </userContext.Provider>
        </BrowserRouter>
      </themeContext.Provider>
    )
    expect(screen).toMatchSnapshot();
  });

  test("dark mode button to be Visible", () => {
    
    render(
      <themeContext.Provider value={themeData}>
        <BrowserRouter>
          <userContext.Provider value={userData}>
            <Header />
          </userContext.Provider>
        </BrowserRouter>
      </themeContext.Provider>
    );
    const linkElement = screen.getByText(/Cambiar/i);
    expect(linkElement).toBeVisible();
  });

  // test("Logout to be in the document", () => {
    
  //   render(
  //     <themeContext.Provider value={themeData}>
  //       <BrowserRouter>
  //         <userContext.Provider value={userData}>
  //           <Header />
  //         </userContext.Provider>
  //       </BrowserRouter>
  //     </themeContext.Provider>
  //   );
  //   const linkElement = screen.queryByText(/Logout/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
});
