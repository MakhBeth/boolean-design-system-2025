import { Button } from "./Tabs.Button";

type TablistProp = {
	tabsLabels: {
		label: React.ReactNode;
		tabId: string;
	}[];
};

export const List: React.FC<TablistProp> = ({ tabsLabels }) => {
	const handleKeyDown = (event: React.KeyboardEvent) => {
		const buttons = Array.from(
			event.currentTarget.querySelectorAll("button[role='tab']"),
		);
		const currentIndex = buttons.findIndex((button) => button === event.target);
		let newIndex = currentIndex;
		switch (event.key) {
			case "Home":
				newIndex = 0;
				break;
			case "ArrowRight":
			case "ArrowUp":
				newIndex = (currentIndex + 1) % buttons.length;
				break;
			case "ArrowLeft":
			case "ArrowDown":
				newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
				break;
			case "End":
				newIndex = buttons.length - 1;
				break;
			default:
				return;
		}
		const next = buttons[newIndex] as HTMLButtonElement;
		next?.focus();
		event.preventDefault();
	};
	return (
		<div role="tablist" className="tablist" onKeyDownCapture={handleKeyDown}>
			{tabsLabels.map(({ label, tabId }) => (
				<Button key={tabId} tabId={tabId}>
					{label}
				</Button>
			))}
		</div>
	);
};
