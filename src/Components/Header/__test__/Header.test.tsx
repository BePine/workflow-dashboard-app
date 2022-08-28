import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
const MockHeader = () => {
	return(
        <BrowserRouter>
		    <Header/>
	    </BrowserRouter>
    )
};
describe('Header', () => {
	test('renders Header element', () => {
		render(<MockHeader/>);
		const headerElement = screen.getByTestId("headerElement");
		expect(headerElement).toBeVisible();
	});
});
