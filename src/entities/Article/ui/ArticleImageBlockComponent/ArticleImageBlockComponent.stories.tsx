import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from '../../model/consts';

export default {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        id: '1',
        type: ArticleBlockType.IMAGE,
        src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        title: 'test',
    },
};
