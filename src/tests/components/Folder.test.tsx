import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import Folder from '../../components/Folder';

describe('Folder Tests', () => {
  it('renders closed folder with valid props as input', () => {
    render(<Folder

      type="folder"
      name="document"
      files={[{
        "type": "doc",
        "name": "Expenses claim form",
        "added": "2017-05-02"
      }]} />);

    expect(screen.getAllByRole("list").length === 2);
    expect(screen.getByText("📁 document")).toBeInTheDocument();
  });

  it('should open the folder when user clicks folder component with valid props and 1 file', () => {
    render(
      <Folder
      type="folder"
      name="document"
      files={[{
        "type": "doc",
        "name": "Expenses claim form",
        "added": "2017-05-02"
      }]} />
    );

    const folder_name = screen.getByText("📁 document");
    expect(folder_name).toBeInTheDocument();
    expect(screen.queryByText("doc")).not.toBeInTheDocument();
    expect(screen.queryByText('Expenses claim form')).not.toBeInTheDocument();
    expect(screen.queryByText("2017-05-02")).not.toBeInTheDocument();
    fireEvent.click(folder_name);
    expect(screen.getByText("doc")).toBeInTheDocument();
    expect(screen.getByText('Expenses claim form')).toBeInTheDocument();
    expect(screen.getByText("2017-05-02")).toBeInTheDocument();
  });


});