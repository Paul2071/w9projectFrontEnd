import {render, screen } from '@testing-library/react';
import App from './App';

test.only('renders the app and checks that button is present for every maincard in the page', () => {
  
render(<App />);

const allButtons = screen.getAllByRole ("button");

expect.arrayContaining(allButtons)

});