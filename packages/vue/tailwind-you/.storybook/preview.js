/** @type { import('@storybook/vue3').Preview } */
import '../src/tailwind.css'; // replace with the name of your tailwind css file

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
