import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleBlockType } from '../../model/consts';

export default {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        id: '1',
        type: ArticleBlockType.CODE,
        code: 'test',

    },
};
