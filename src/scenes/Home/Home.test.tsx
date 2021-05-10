import React from 'react';
import { screen, render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  render(<Home />)
  it('should render without crashing ', () => {
    expect(screen.queryByText(/Home/i)).toBeInTheDocument()
  });
});
