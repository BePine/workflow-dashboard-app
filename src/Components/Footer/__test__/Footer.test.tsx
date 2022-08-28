import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
describe("Footer",()=>{
    test('renders Footer element', () => {
        render(<Footer/>);
        const footerElement = screen.getByText(/github/i);
        expect(footerElement).toBeVisible();
      });
})