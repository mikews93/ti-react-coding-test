import React from 'react';
import { screen, render } from '@testing-library/react';

import Header from './Header';

jest.mock('react-router', () => ({
  withRouter: Comp => props => <Comp {...props} />,
}))

describe('Header', () => {
  const pathname = '/some-route'
  //@ts-ignore
  render(<Header location={{pathname}}/>)
  it('should render without crashing ', async () => {
    expect(await screen.findByText(/Home/i)).toBeInTheDocument()
  });
});
