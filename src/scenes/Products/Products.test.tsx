import React from 'react';
import { screen, render } from '@testing-library/react';

import Products from './Products';

describe('Products', () => {
  render(
    <React.Suspense fallback="test loading">
      <Products />
    </React.Suspense>
  )
  it('should render without crashing ', async () => {
    expect(await screen.findByText(/Categories/i)).toBeInTheDocument()
  });
});
