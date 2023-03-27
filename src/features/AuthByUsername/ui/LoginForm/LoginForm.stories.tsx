import { ComponentStory, ComponentMeta } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';

import LoginForm from './LoginForm';

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
Primary.decorators = [storeDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [storeDecorator({
    loginForm: { username: '123', password: '123', error: 'Error' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [storeDecorator({
    loginForm: { isLoading: true },
})];
