import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//test 1: check that the page loads correctly by doing a get by text
//test 2: check that add to list button runs a mock function 
//test 3: 

test('renders app and check week that main card is rendered', () => {
  //Arrange
  render(<App />);
  //Act
 const mainCard = screen.getByText("MainCard here");
 // Assert that the card is in the document
 expect(mainCard).toBeInTheDocument();
});

