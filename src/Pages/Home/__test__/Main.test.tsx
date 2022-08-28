import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';
import { BrowserRouter } from 'react-router-dom';
const MockMain = () =>{
    return(
        <BrowserRouter><Main/></BrowserRouter>
    )
}
describe("Main",()=>{
    test('renders Main element', () => {
        render(<MockMain/>);
        const headingElement = screen.getByText(/about us/i);
        expect(headingElement).toBeVisible();
      });
    test('renders Main element', () => {
        render(<MockMain/>);
        const headingElement = screen.getByText(/Workflow is our application/i);
        expect(headingElement).toBeVisible();
      });
      
})
