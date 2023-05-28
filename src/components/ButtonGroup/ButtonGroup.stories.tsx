import ButtonGroup from './ButtonGroup';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'V1/ButtonGroup',
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ButtonList:[
        {
          "btnLink":"https://twitter.com/blazingruthvik",
          "btnLabel":"Twitter  🐦"  
        },
        {
          "btnLink":"https://www.linkedin.com/in/ruthvik-kamarasu-984a23166/?originalSubdomain=in",
          "btnLabel":"LinkedIn 🖨️"  
        },
        {
          "btnLink":"https://hashnode.com/@axelblaze0510",
          "btnLabel":"Blog ✒️"  
        }
    ]
  },
};