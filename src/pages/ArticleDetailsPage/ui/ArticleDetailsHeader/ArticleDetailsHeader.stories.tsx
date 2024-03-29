import { ComponentStory, ComponentMeta } from '@storybook/react';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import { ArticleDetailsHeader } from './ArticleDetailsHeader';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsHeader',
    component: ArticleDetailsHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsHeader>;

const Template: ComponentStory<typeof ArticleDetailsHeader> = (args) => (
    <ArticleDetailsHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];
