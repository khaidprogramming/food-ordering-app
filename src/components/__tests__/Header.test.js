import { fireEvent, render,screen } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

test("should render button in header components", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button",{name:"Log in"})

  expect(button).toBeInTheDocument()


});

it("should render cart with 0 items in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cart = screen.getByText(/Cart/)
  
    expect(cart).toBeInTheDocument()
  
  
  });

  it("should render cart with 0 items in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button",{name:"Log in"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name:"Log out"})

    

  
    expect(logoutButton).toBeInTheDocument()
  
  
  });  