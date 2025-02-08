import { render, screen  } from '@testing-library/react';
import { expect } from 'vitest';
import File from '../../components/File';

describe('File Tests', () => {
  it('renders file component with valid props', () => {
    render(<File file_type="pdf" name="document" date_added="2025-08-02"/>);

    const list = screen.getByRole("list");
    const file_type = screen.getByText("pdf");
    const name = screen.getByText("document");
    const date_added = screen.getByText("2025-08-02");
    expect(list).toBeInTheDocument();
    expect(file_type).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date_added).toBeInTheDocument();
  });
});