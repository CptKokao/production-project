import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator.ts';
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator.tsx';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator.tsx';
import { suspenseDecorator } from '../../src/shared/config/storybook/suspenseDecorator/suspenseDecorator.tsx';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.LIGHT));
addDecorator(routerDecorator);
addDecorator(suspenseDecorator);
