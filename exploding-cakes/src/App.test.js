import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Futura web - Exploding cakes/i);
  expect(linkElement).toBeInTheDocument();
});
