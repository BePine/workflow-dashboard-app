import React from 'react';
import { render, screen } from '@testing-library/react';
import AppNavbar from '../AppNavbar';
import { BrowserRouter } from 'react-router-dom';
const MockAppNavbar = () => {
    return(
        <BrowserRouter><AppNavbar/></BrowserRouter>
    )
}
describe("AppNavbar",()=>{
    test('renders AppNavbar element', () => {
        render(<MockAppNavbar/>);
        const appNavbarElement = screen.getByTestId('appNavbarTest');
        expect(appNavbarElement).toBeVisible();
      });
})
