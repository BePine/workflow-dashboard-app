import React from 'react';
import { render, screen } from '@testing-library/react';
import NewTaskPage from '../NewTaskPage';
describe("NewTaskPage",()=>{
    test('renders NewTaskPage element', () => {
        render(<NewTaskPage/>);
        const newTaskPageElement = screen.getByTestId('newTaskPageTest');
        expect(newTaskPageElement).toBeVisible();
      });
})