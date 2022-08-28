import React, { FormEvent } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../LoginPage';
import { BrowserRouter } from 'react-router-dom';
const MockLoginPage = () => {
	return(
        <BrowserRouter>
		    <LoginPage />
	    </BrowserRouter>
    )
};
describe('LoginPage', () => {
	test('renders LoginPage element', () => {
		render(<MockLoginPage/>);
		const loginPageElement = screen.getByRole('main');
		expect(loginPageElement).toBeVisible();
	});
    describe("Login Panel",()=>{
        test('renders login container', async () => {
            render(<MockLoginPage/>);
            const loginElement = await screen.getByTestId('loginCont');
            expect(loginElement).toBeVisible();
        });
        test('renders login button', async () => {
            render(<MockLoginPage/>);
            const buttonElement = await screen.findByTestId('loginButton');
            expect(buttonElement).toBeVisible();
        });
        test('renders login form', async () => {
            render(<MockLoginPage/>);
            const formElement = await screen.findByRole('form');
            expect(formElement).toBeVisible();
        });
        
    })
    
    
    describe("register panel",()=>{
        test('renders register container', async () => {
            render(<MockLoginPage/>);
            const buttonElement = await screen.getByText(/register/i)
            fireEvent.click(buttonElement)
            const registerElement = await screen.getByTestId('regCont');
            expect(registerElement).toBeVisible();
        });
        test('renders register form', async () => {
            render(<MockLoginPage/>);
            const buttonElement = await screen.getByText(/register/i)
            fireEvent.click(buttonElement)
            const formElement = await screen.findByRole('form');
            expect(formElement).toBeVisible();
        });

    })
});