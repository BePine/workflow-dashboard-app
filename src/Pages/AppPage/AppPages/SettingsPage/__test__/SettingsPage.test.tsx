import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsPage from '../SettingsPage';

describe("SettingsPage",()=>{
    test('renders SettingsPage element', () => {
        render(<SettingsPage/>);
        const settingsPageElement = screen.getByTestId('settingsPageTest');
        expect(settingsPageElement).toBeVisible();
      });
})
