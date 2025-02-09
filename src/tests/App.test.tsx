import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from  "../App";

describe('App', () => {
  it('display file list', () => {
    render(<App />)

    // 3 lists in data list
    expect(screen.getAllByRole("list").length === 3);
    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
    expect(screen.getByText("Public Holiday policy")).toBeInTheDocument();
    expect(screen.getByText("📁 Expenses")).toBeInTheDocument();
    //expect(screen.getByText("Expenses claim form")).toBeInTheDocument();
    //expect(screen.getByText("Fuel allowances")).toBeInTheDocument();
    expect(screen.getByText("Cost centres")).toBeInTheDocument();
    expect(screen.getByText("📁 Misc")).toBeInTheDocument();
    //expect(screen.getByText("Christmas party")).toBeInTheDocument();
    //expect(screen.getByText("Welcome to the company!")).toBeInTheDocument();

  });

  it("filters by a file name typed in by the user", () => {
    render(<App />);
    const inputBox = screen.getByPlaceholderText("Search");
    const submitButton = screen.getByRole("button");
    fireEvent.change(inputBox, {target: {value: 'Misc'}}) 
    fireEvent.click(submitButton);

    expect(screen.queryByText("📁 Misc")).toBeInTheDocument();
    expect(screen.queryByText("Employee Handbook")).not.toBeInTheDocument();
    expect(screen.queryByText("Public Holiday policy")).not.toBeInTheDocument();
    expect(screen.queryByText("📁 Expenses")).not.toBeInTheDocument();
    expect(screen.queryByText("Expenses claim form")).not.toBeInTheDocument();
    expect(screen.queryByText("Fuel allowances")).not.toBeInTheDocument();
    expect(screen.queryByText("Cost centres")).not.toBeInTheDocument();
    expect(screen.queryByText("Christmas party")).not.toBeInTheDocument();
    expect(screen.queryByText("Welcome to the company!")).not.toBeInTheDocument();
  })
  
  //it('sort by name', () => {fail()});
  //it('sort by date', () => {fail()});
});