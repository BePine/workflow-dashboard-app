import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { BrowserRouter } from 'react-router-dom';
const MockNavbar = () => {
	return(
        <BrowserRouter>
		    <Navbar />
	    </BrowserRouter>
    )
};
describe('Navbar', () => {
	test('renders Navbar element', () => {
		render(<MockNavbar/>);
		const navbarElement = screen.getByRole('list');
		expect(navbarElement).toBeVisible();
	});
    
});
