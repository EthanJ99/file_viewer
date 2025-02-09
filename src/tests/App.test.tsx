import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from  "../App";

describe('App', () => {
  it('display file list', () => {
    render(<App />)

    // 3 lists in data list
    expect(screen.getAllByRole("list").length === 3);
    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
    expect(screen.getByText("Public Holiday policy")).toBeInTheDocument();
    expect(screen.getByText("Expenses")).toBeInTheDocument();
    expect(screen.getByText("Expenses claim form")).toBeInTheDocument();
    expect(screen.getByText("Fuel allowances")).toBeInTheDocument();
    expect(screen.getByText("Cost centres")).toBeInTheDocument();
    expect(screen.getByText("Misc")).toBeInTheDocument();
    expect(screen.getByText("Christmas party")).toBeInTheDocument();
    expect(screen.getByText("Welcome to the company!")).toBeInTheDocument();

  });
  
  //it('able to open folder', () => {fail()});
  //it('filter by filename', () => {fail()});
  //it('sort by name', () => {fail()});
  //it('sort by date', () => {fail()});
});