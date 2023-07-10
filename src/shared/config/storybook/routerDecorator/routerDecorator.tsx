import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
