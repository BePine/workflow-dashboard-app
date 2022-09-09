import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
describe("HomePage",()=>{
    test('renders HomePage element', () => {
        render(<HomePage/>);
        const homePageElement = screen.getByTestId('homePageTest');
        expect(homePageElement).toBeVisible();
      });
})