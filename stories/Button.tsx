import React from "react";

import "./button.css";

interface ButtonProps {
	/** This means that the call to action is primary or not */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: "small" | "medium" | "large";
	/** Button contents */
	label: string;
	/** Optional click handler */
	onClick?: () => void;
	/** This attribute can add an icon to the button */
	icon?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
	primary,
	backgroundColor,
	size,
	label,
	icon,
	...props
}: ButtonProps) => {
	const mode = primary
		? "storybook-button--primary"
		: "storybook-button--secondary";
	return (
		<button
			type="button"
			className={["storybook-button", `storybook-button--${size}`, mode].join(
				" ",
			)}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
			{icon}
		</button>
	);
};

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: "medium",
	onClick: undefined,
};
