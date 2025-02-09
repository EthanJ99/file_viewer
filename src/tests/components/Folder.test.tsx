import { render, screen  } from '@testing-library/react';
import { expect } from 'vitest';
import Folder from '../../components/Folder';

describe('Folder Tests', () => {
  it('renders folder component with valid props and 1 file', () => {
    render(<Folder
      type="folder"
      name="document"
      files={[{
        "type": "doc",
        "name": "Expenses claim form",
        "added": "2017-05-02"
    }]}/>);

    expect(screen.getAllByRole("list").length === 2);
    //expect(screen.getByText("folder")).toBeInTheDocument();
    expect(screen.getByText("document")).toBeInTheDocument();
    expect(screen.getByText("doc")).toBeInTheDocument();
    expect(screen.getByText("Expenses claim form")).toBeInTheDocument();
    expect(screen.getByText("2017-05-02")).toBeInTheDocument();
  });
});