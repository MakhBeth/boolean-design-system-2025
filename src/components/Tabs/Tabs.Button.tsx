import React from "react";
import { useTabsContext } from "./Tabs.Context";

type ButtonProps = {
	children: React.ReactNode;
	tabId: string;
};

export const Button: React.FC<ButtonProps> = ({ children, tabId }) => {
	const { activeTab, setActiveTab } = useTabsContext();
	const [focusable, setFocusable] = React.useState(activeTab === tabId);
	return (
		<button
			role="tab"
			type="button"
			key={tabId}
			onClick={() => setActiveTab(tabId)}
			aria-controls={tabId}
			aria-selected={activeTab === tabId}
			id={`button-${tabId}`}
			tabIndex={focusable ? 0 : -1}
			onFocus={() => setFocusable(true)}
			onBlur={() => setFocusable(activeTab === tabId)}
		>
			{children}
		</button>
	);
};
