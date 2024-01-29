import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import InputWrapper, { Types } from './InputWrapper';

describe('Input Wrapper Component', () => {
  it('renders Input wrapper components correctly', () => {
    render(<InputWrapper id="email" label="Email" type={Types.TEXT} />);

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    expect(emailInput).toBeInTheDocument();
  });

  it('renders Input wrapper with provided label', () => {
    render(<InputWrapper id="email" label="Email" type={Types.TEXT} />);

    const emailLabel = screen.getByText('Email');
    expect(emailLabel).toBeInTheDocument();
  });

  it('renders Input wrapper with provided label', () => {
    render(<InputWrapper id="email" label="Email" type={Types.TEXT} />);

    const emailLabel = screen.getByText('Email');
    expect(emailLabel).toBeInTheDocument();
  });

  it('should apply the provided className', () => {
    const className = 'custom-button';
    render(<InputWrapper id="email" label="Email" type={Types.TEXT} classNames={className} />);

    const buttonElement = screen.getByRole('textbox');
    expect(buttonElement).toHaveClass(className);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<InputWrapper id="email" label="Email" type={Types.TEXT} isDisabled={true} />);

    const buttonElement = screen.getByRole('textbox');
    expect(buttonElement).toBeDisabled();
  });
});
