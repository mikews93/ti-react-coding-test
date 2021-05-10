import React from 'react';
import { screen, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  render(
    <React.Suspense fallback="test loading">
      <App />
    </React.Suspense>
  )
  it('should render without crashing ', async () => {
    expect(await screen.findByText(/Home/i)).toBeInTheDocument()
  });
});
