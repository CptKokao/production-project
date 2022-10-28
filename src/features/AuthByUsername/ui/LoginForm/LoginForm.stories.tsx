import { ComponentStory, ComponentMeta } from '@storybook/react';
import { storyDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';

import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [storyDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [storyDecorator({
    loginForm: { username: '123', password: '123', error: 'Error' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [storyDecorator({
    loginForm: { isLoading: true },
})];
