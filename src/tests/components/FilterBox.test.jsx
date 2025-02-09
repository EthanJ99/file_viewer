import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import FilterBox from "../../components/FilterBox";
import userEvent from "@testing-library/user-event";

describe("Filter Button", () => {
  it("renders filter button", () => {
    render(<FilterBox />);

    const filterButton = screen.getByRole("button");

    expect(filterButton).toBeInTheDocument();
  });
  
  it("calls set filter function with text input by user", () => {
    const handle_submit = vi.fn();
    render(<FilterBox setFilter={handle_submit}/>);
    const inputBox = screen.getByPlaceholderText("Search");
    const submitButton = screen.getByRole("button");
    fireEvent.change(inputBox, {target: {value: 'Misc'}}) 
    fireEvent.click(submitButton);
    expect(handle_submit).toHaveBeenCalledWith("Misc");
  })
  
});