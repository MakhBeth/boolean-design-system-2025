import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonHTMLAttributes } from "react";

const meta: Meta = {
	title: "Atoms/Colors",
};

export default meta;

type Story = StoryObj<typeof meta>;

const ClickToCopy: React.FC<
	{ value: string } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ value, ...attrs }) => {
	return (
		<button
			className="click-to-copy"
			{...attrs}
			style={{ border: "none", cursor: "pointer", ...attrs.style }}
			onClick={() => navigator.clipboard.writeText(value)}
			aria-label={`Copy ${value}`}
		/>
	);
};

export const Default: Story = {
	render: () => (
		<div>
			<style>{`
				.container {
					display: grid;
					grid-template-columns: repeat(16, 1fr);
					height: 3rem;
					margin-bottom: var(--spacing-lg);
				}
				.info {
					padding: var(--spacing-md);
					background-color: var(--color-neutral-bcg);
					color: var(--color-neutral-text);
					margin-bottom: var(--spacing-lg);
					border: 1px solid var(--color-neutral-accent);
					border-radius: var(--border-radius-sm, 0.25rem);
				}
			`}</style>
			<h1>Colors</h1>
			<h2>Primitives</h2>
			<h3>Gray</h3>
			<div className="container">
				{Array.from({ length: 16 }).map((_, index) => (
					<ClickToCopy
						className="info"
						style={{ backgroundColor: `var(--color-gray-${index})` }}
						key={index}
						value={`var(--color-gray-${index})`}
					/>
				))}
			</div>
			<h3>Green</h3>
			<div className="container">
				{Array.from({ length: 16 }).map((_, index) => (
					<ClickToCopy
						className="info"
						style={{ backgroundColor: `var(--color-green-${index})` }}
						key={index}
						value={`var(--color-green-${index})`}
					/>
				))}
			</div>
			<h3>Red</h3>
			<div className="container">
				{Array.from({ length: 16 }).map((_, index) => (
					<ClickToCopy
						className="info"
						style={{ backgroundColor: `var(--color-red-${index})` }}
						key={index}
						value={`var(--color-red-${index})`}
					/>
				))}
			</div>
			<h2>Semantic</h2>
			<h3>Neutral</h3>
			<div className="info">
				Per questo box abbiamo usato:{" "}
				<ClickToCopy value="var(--color-neutral-bcg)">
					--color-neutral-bcg
				</ClickToCopy>
				,
				<ClickToCopy value="var(--color-neutral-text)">
					--color-neutral-text
				</ClickToCopy>
				e
				<ClickToCopy value="var(--color-neutral-accent)">
					--color-neutral-accent
				</ClickToCopy>
			</div>
			<h3>Positive</h3>
			<div
				className="info"
				style={{
					backgroundColor: "var(--color-positive-bcg)",
					color: "var(--color-positive-text)",
					borderColor: "var(--color-positive-accent)",
				}}
			>
				Per questo box abbiamo usato:{" "}
				<ClickToCopy value="var(--color-positive-bcg)">
					--color-positive-bcg
				</ClickToCopy>
				,
				<ClickToCopy value="var(--color-positive-text)">
					--color-positive-text
				</ClickToCopy>
				e
				<ClickToCopy value="var(--color-positive-accent)">
					--color-positive-accent
				</ClickToCopy>
			</div>
			<h3>Negative</h3>
			<div
				className="info"
				style={{
					backgroundColor: "var(--color-negative-bcg)",
					color: "var(--color-negative-text)",
					borderColor: "var(--color-negative-accent)",
				}}
			>
				Per questo box abbiamo usato:{" "}
				<ClickToCopy value="var(--color-negative-bcg)">
					--color-negative-bcg
				</ClickToCopy>
				,
				<ClickToCopy value="var(--color-negative-text)">
					--color-negative-text
				</ClickToCopy>
				e
				<ClickToCopy value="var(--color-negative-accent)">
					--color-negative-accent
				</ClickToCopy>
			</div>
		</div>
	),
};
