import type { Meta, StoryObj } from "@storybook/react";
import React, { type CSSProperties } from "react";

const meta: Meta = {
	title: "Atoms/Spacing",
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

const SpaceCalc = ({ value }: { value: string }) => {
	const spacing = React.useMemo(() => {
		const bodyStyle = window.getComputedStyle(document.body);
		return bodyStyle.getPropertyValue(value);
	}, [value]);
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
      grid-template-columns: min-content max-content min-content;
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
        display: grid;
        gap: 1ch;
        grid-template-columns: subgrid;
        grid-column: 2/4;
        align-items: center;
      }

      .info {
        background: magenta;
        height: var(--story-spacing);
        width: var(--story-spacing);
        display: block;
      }
    `}</style>
	);
};

const dimensions = ["zero", "xs", "sm", "md", "lg", "xl"] as const;

export const Default: Story = {
	render: () => (
		<>
			<h1>Spacing</h1>
			<p style={{ maxWidth: "55ch" }}>
				Our spacing variables use a clamping mechanism to ensure that the
				spacing is scalable across different screen sizes. * This is done by
				using the `clamp()` function. * The minimum viewport width is 400px and
				the maximum is 1200px.
			</p>
			<Style />
			<dl>
				{dimensions.map((key) => (
					<React.Fragment key={key}>
						<dt>{key}</dt>
						<dd style={{ "--story-spacing": `var(--spacing-${key})` }}>
							<span>
								<SpaceCalc value={`--spacing-${key}`} />
							</span>
							<span className="info" />
						</dd>
					</React.Fragment>
				))}
			</dl>
		</>
	),
};

/** Resize this view to get the values */
export const ResizeMe: Story = {
	render: () => {
		return (
			<div
				style={{
					border: "1px solid #ccc",
					resize: "horizontal",
					overflow: "hidden",
					minHeight: "300px",
					position: "relative",
					minWidth: "300px",
				}}
			>
				<iframe
					style={{
						width: "100%",
						height: "100%",
						border: "none",
						position: "absolute",
						top: 0,
						left: 0,
					}}
					title="Resize me"
					src="/iframe.html?globals=&args=&id=atoms-spacing--resize&viewMode=story"
				/>
			</div>
		);
	},
};

type dimensions = (typeof dimensions)[number];

const Resizer: React.FC = () => {
	const width = React.useSyncExternalStore(
		(callback) => {
			window.addEventListener("resize", callback);
			return () => window.removeEventListener("resize", callback);
		},
		() => window.innerWidth,
	);

	const deferredWidth = React.useDeferredValue(width);

	const widthsRef = React.useRef<
		Partial<Record<dimensions, HTMLElement | null>>
	>({});

	const [rendered, setRendered] = React.useState<boolean>(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: we need to rerun this on width change
	const widths = React.useMemo(() => {
		return dimensions.reduce(
			(acc, key) => {
				const element = widthsRef.current[key];
				if (!element || !rendered) return acc;
				acc[key] = element.clientWidth;
				return acc;
			},
			{} as Record<dimensions, number>,
		);
	}, [deferredWidth, rendered]);

	return (
		<div
			style={{
				position: "relative",
				display: "flex",
				gap: "1rem",
				flexDirection: "column",
			}}
			ref={(el) => setRendered(!!el)}
		>
			<Style />
			<span
				style={{
					position: "fixed",
					top: 0,
					left: "50%",
					transform: "translateX(-50%)",
					borderRadius: "0.5em",
					fontFamily: "monospace",
					backgroundColor: "#ccc",
					padding: "0.5em",
				}}
			>
				{deferredWidth}px
			</span>
			{dimensions.map((key) => (
				<div
					style={
						{
							"--story-spacing": `var(--spacing-${key})`,
							display: "flex",
							gap: "1rem",
							alignItems: "center",
							fontSize: "0.8rem",
							fontFamily: "monospace",
						} as CSSProperties
					}
					key={key}
				>
					<span
						className="info"
						ref={(el) => {
							widthsRef.current[key] = el;
						}}
					/>
					<span className="value">{widths[key]}px</span>
				</div>
			))}
		</div>
	);
};

export const Resize: Story = {
	tags: ["!dev"],
	render: () => {
		return <Resizer />;
	},
};
