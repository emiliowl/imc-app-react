import { render, screen } from '@testing-library/react';
import IMcApp from './ImcApp';

test('renders learn react link', () => {
  render(<ImcApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
