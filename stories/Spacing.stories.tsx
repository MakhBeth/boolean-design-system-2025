import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
	title: "Atoms/Spacing",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const SpaceCalc = ({ value }: { value: string }) => {
	const spacing = React.useMemo(() => {
		const bodyStyle = window.getComputedStyle(document.body);
		return bodyStyle.getPropertyValue(value);
	}, [value]);
	console.log({ spacing });
	return <span>{spacing}</span>;
};

const Style: React.FC = () => {
	return (
		<style>{`
     dl {
      font-size: 1rem;
      border: 1px solid #ccc;
      display: grid;
      max-width: calc(550rem / 16);
      grid-template-columns: 1fr 1fr;
      border-bottom: none;
      border-radius: 0.5rem;
     }
      dt {
        font-weight: 600;
        padding: var(--spacing-sm) var(--spacing-md);
        border-bottom: 1px solid #ccc;
      }

      dd {
        padding: var(--spacing-sm) var(--spacing-md);
        border-bottom: 1px solid #ccc;
        font-family: monospace;
      }
    `}</style>
	);
};

export const Default: Story = {
	render: () => (
		<>
			<Style />
			<dl>
				{["zero", "xs", "sm", "md", "lg", "xl"].map((key) => (
					<React.Fragment key={key}>
						<dt>{key}</dt>
						<dd>
							<SpaceCalc value={`--spacing-${key}`} />
						</dd>
					</React.Fragment>
				))}
			</dl>
		</>
	),
};
