// eslint-disable-next-line kokao-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const styleDecorator = (story: () => Story) => story();
