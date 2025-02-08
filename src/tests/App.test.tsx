import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from  "../App";

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    const title = screen.getByText("Vite + React");
    expect(title).toBeInTheDocument();
  });
});