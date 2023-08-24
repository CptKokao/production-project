import { ComponentStory, ComponentMeta } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio est repellendus nam amet veritatis quaerat! Modi impedit recusandae id magni nulla velit facilis deserunt possimus harum natus exercitationem culpa, mollitia blanditiis vitae consequuntur voluptatibus dolores obcaecati error suscipit? Aliquam facere temporibus impedit aliquid laborum eius neque ipsa amet minima.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio est repellendus nam amet veritatis quaerat! Modi impedit recusandae id magni nulla velit facilis deserunt possimus harum natus exercitationem culpa, mollitia blanditiis vitae consequuntur voluptatibus dolores obcaecati error suscipit? Aliquam facere temporibus impedit aliquid laborum eius neque ipsa amet minima.',
    isOpen: true,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
