import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from  "../App";

describe('App', () => {
  it('display file list', () => {
    render(<App />)
  });
  //it('open folder', () => {fail()});
  //it('filter by filename', () => {fail()});
  //it('sort by name', () => {fail()});
  //it('sort by date', () => {fail()});
});