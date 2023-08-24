import { ComponentStory, ComponentMeta } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '1234',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Type text',
    value: '1234',
};
Dark.decorators = [themeDecorator(Theme.DARK)];
