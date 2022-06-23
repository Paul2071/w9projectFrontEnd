import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"

// TEST 1
test('renders button and checks it is present on page', () => {
    //Arrange - render thebutton
    render(<button />);
    //Act
   const button = screen.getByRole("button");
   // Assert that the button is in the document
   expect(button).toBeInTheDocument();
  });

// TEST 2
test('checks that input field has correct placeholder text', () => {
    //Arrange - render the input field and define the text it should have
    const text = "Click list item to complete"
    render(<input placeholder='Click list item to complete'/>);
    //Act
   const inputfield = screen.getByPlaceholderText(text);
   // Assert that the input is in the document
   expect(inputfield).toBeInTheDocument()
  });

//TEST 3
test('check that add to list buttons runs a mock function', () => {
    //Arrange - use the mock function jest.fn
    const mock = jest.fn()

    render(<button onClick={mock} />);
    const button = screen.getByRole("button");

    //Act - user clicks button
    userEvent.click(button)
    //Assert - make sure that a mock function has been called onClick of our button
    expect(mock).toHaveBeenCalled()
  });
  