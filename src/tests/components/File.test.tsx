import { render, screen  } from '@testing-library/react';
import { expect } from 'vitest';
import File from '../../components/File';

describe('File Tests', () => {
  it('renders file component with valid props', () => {
    render(<File type="pdf" name="document" added="2025-08-02"/>);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("pdf")).toBeInTheDocument();
    expect(screen.getByText("document")).toBeInTheDocument();
    expect(screen.getByText("2025-08-02")).toBeInTheDocument();
  });
});