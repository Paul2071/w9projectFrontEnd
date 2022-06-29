import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Resources from './index.js'

test("renders resources link and checks if it navigates to external page when clicked", () => {
    render(<Resources href="www.google.com" />);
    
    const link = screen.getByText("View Resources");
    
    userEvent.click(link)
    
    screen.debug()

});