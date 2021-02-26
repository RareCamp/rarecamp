import { render, screen } from '@testing-library/react';
import IndexPage from 'pages/index';

describe('IndexPage', () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
  test('shows the invite header and table', () => {
    render(<IndexPage></IndexPage>);
    const invite = screen.getByRole('button', {
      name: /invite/i,
    });
    expect(invite).toBeInTheDocument();
    const tableRec = screen.getByRole('row', {
      name: /Initial Planning/i,
    });
    expect(tableRec).toBeInTheDocument();
  });
});
