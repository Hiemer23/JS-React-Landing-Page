import { renderTheme } from '../../styles/render-theme'
import { screen } from '@testing-library/react'
import Home from '.';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hellow' })
    .parentElement;
  expect(headingContainer).toMatchSnapshot()
});
