import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { Theme } from 'app/providers/ThemeProvider';
// import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
// import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});

// export const Light = Template.bind({});
// Light.args = {};
// Light.decorators = [
//     storeDecorator({
//         user: { authData: {} },
//     }),
// ];

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [
//     themeDecorator(Theme.DARK),
//     storeDecorator({
//         user: { authData: {} },
//     }),
// ];

// export const NoAuth = Template.bind({});
// NoAuth.args = {};
// NoAuth.decorators = [
//     themeDecorator(Theme.DARK),
//     storeDecorator({
//         user: { },
//     }),
// ];
