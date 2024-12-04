import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Atoms/Typography",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		children: "The quick brown fox",
	},
	render: ({ children }) => (
		<>
			<div className="font-size-hero">{children}</div>
			<h1>{children}</h1>
			<h2>{children}</h2>
			<h3>{children}</h3>
			<h4>{children}</h4>
			<h5>{children}</h5>
			<h6>{children}</h6>
			<div className="font-size-body">{children}</div>
			<div className="font-size-sm">{children}</div>
			<div className="font-size-xs">{children}</div>
		</>
	),
};
