import React from 'react';
import { screen, render } from '@testing-library/react';

import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  render(<ContactForm />)
  it('should render all fields without crashing ', () => {
    expect(screen.queryByText(/First name/i)).toBeInTheDocument()
    expect(screen.queryByText(/Last name/i)).toBeInTheDocument()
    expect(screen.queryByText(/Email/i)).toBeInTheDocument()
    expect(screen.queryByText(/Subject/i)).toBeInTheDocument()
  });
});
