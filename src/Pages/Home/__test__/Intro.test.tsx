import React from 'react';
import { render, screen } from '@testing-library/react';
import Intro from '../Intro';
describe("Intro",()=>{
    test('renders Intro element', () => {
        render(<Intro display="block" opacity={1}/>);
        const introElement = screen.getByTestId("introId");
        expect(introElement).toBeVisible();
      });
      test('derenders Intro element', () => {
        render(<Intro display="none" opacity={0}/>);
        const introElement = screen.getByTestId("introId");
        expect(introElement).not.toBeVisible();
      });
})
