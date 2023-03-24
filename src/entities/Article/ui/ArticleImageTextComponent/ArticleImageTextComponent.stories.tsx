import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageTextComponent } from './ArticleImageTextComponent';

export default {
    title: 'shared/ArticleImageTextComponent',
    component: ArticleImageTextComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageTextComponent>;

const Template: ComponentStory<typeof ArticleImageTextComponent> = (args) => <ArticleImageTextComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
