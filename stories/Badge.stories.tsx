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
	render: ({ children, variant }) => (
		<Badge variant={variant}>{children}</Badge>
	),
};

export const AllBadges: Story = {
	render: ({ children }) => (
		<div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
			<Badge variant="neutral">{children}</Badge>
			<Badge variant="positive">{children}</Badge>
			<Badge variant="negative">{children}</Badge>
		</div>
	),
};
