import React from 'react';
import { render, screen } from '@testing-library/react';
import AppContent from '../AppContent';
const page = 1
describe("AppContent",()=>{
    test('renders AppContent element', () => {
        render(<AppContent page={page} />);
        const appContentElement = screen.getByTestId('appContentTest');
        expect(appContentElement).toBeVisible();
      });
})
