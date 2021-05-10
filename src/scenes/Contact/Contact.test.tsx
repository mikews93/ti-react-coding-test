import React from 'react';
import { screen, render } from '@testing-library/react';

import Contact from './Contact';

describe('Contact', () => {
  render(<Contact />)
  it('should render without crashing ', () => {
    expect(screen.queryByText(/Submit/i)).toBeInTheDocument()
  });
});
