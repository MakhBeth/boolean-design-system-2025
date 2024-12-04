import { useTabsContext } from "./Tabs.Context";

interface TabProps {
	id: string;
	children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ id, children }) => {
	const { activeTab } = useTabsContext();
	return (
		<div
			aria-labelledby={`button-${id}`}
			role="tabpanel"
			key={id}
			id={id}
			hidden={activeTab !== id}
		>
			{children}
		</div>
	);
};
