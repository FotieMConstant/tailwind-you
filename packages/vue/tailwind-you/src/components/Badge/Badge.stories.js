import Badge from './Badge.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'tailwind-you/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
    args: {
    },
  };

