import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../src/components/Badge/Badge";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		children: { control: "text" },
	},
	args: {
		children: "Badge",
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ children }) => <Badge>{children}</Badge>,
};
