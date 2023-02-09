import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { storyDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/AboutPage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storyDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storyDecorator];
