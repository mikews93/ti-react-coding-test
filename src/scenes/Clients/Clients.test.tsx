import React from 'react';
import { screen, render } from '@testing-library/react';

import Clients from './Clients';

describe('Clients', () => {
  render(<Clients />)
  it('should render without crashing ', () => {
    expect(screen.queryByText(/Clients/i)).toBeInTheDocument()
  });
});
