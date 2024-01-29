import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Login from './Login';

describe('Login modules', () => {
  it('renders Login components correctly', () => {
    render(<Login />);

    const welcomeText = screen.getByText('Welcome!');
    expect(welcomeText).toBeInTheDocument();

    const subHeaderText = screen.getByText('or login to get started using HRMS');
    expect(subHeaderText).toBeInTheDocument();
  });

  it('should render and click Create an account link', () => {
    const onClick = vi.fn();
    fireEvent.click = onClick;

    render(<Login />);

    const anchorTag = screen.getByText('Create an account');

    expect(anchorTag).toBeInTheDocument();

    expect(anchorTag).toHaveClass('signup-link');

    fireEvent.click(anchorTag);
    expect(onClick).toHaveBeenCalled();
  });

  it('should render and click Forgot password? link', () => {
    const onClick = vi.fn();
    fireEvent.click = onClick;

    render(<Login />);

    const anchorTag = screen.getByText('Forgot password?');

    expect(anchorTag).toBeInTheDocument();

    expect(anchorTag).toHaveClass('signup-link');

    fireEvent.click(anchorTag);
    expect(onClick).toHaveBeenCalled();
  });

  it('should call the function onClick when clicked in login button', () => {
    const onClick = vi.fn();
    fireEvent.click = onClick;

    render(<Login />);

    const loginButton = screen.getByRole('button', {
      name: /Login/i,
    });

    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(onClick).toHaveBeenCalled();
  });
});
