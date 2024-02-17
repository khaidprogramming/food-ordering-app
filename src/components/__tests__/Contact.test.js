import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test('should contain button', () => { 
    render(<Contact/>)
    const button = screen.getByText("submit")

    expect(button).toBeInTheDocument()

 })

 test('should contain two input box', () => { 
    // rendering
    render(<Contact/>)

    // quering 
    const inputBoxes = screen.getAllByRole("textbox")

    //  Assertion
    expect(inputBoxes.length).toBe(2)
  })