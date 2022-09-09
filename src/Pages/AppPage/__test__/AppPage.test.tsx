import React from 'react';
import { render, screen } from '@testing-library/react';
import AppPage from '../AppPage';
import { BrowserRouter } from 'react-router-dom';

const MockAppPage = () => {
    return(
        <BrowserRouter><AppPage/></BrowserRouter>
    )
}
describe("AppPage",()=>{
    test('renders AppPage element', () => {
        render(<MockAppPage/>);
        const appPageElement = screen.getByTestId('appPageTest');
        expect(appPageElement).toBeVisible();
      });
})
