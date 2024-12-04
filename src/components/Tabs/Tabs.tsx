import type { ReactElement } from "react";
import React from "react";
import { Item, type ItemProps } from "./Tabs.Item";
import { List } from "./Tabs.List";
import { TabsContext } from "./Tabs.Context";
import { Tab } from "./Tabs.Tab";
import root from "react-shadow";

import css from "./Tabs.css?raw";
import { GlobalStyles } from "../GlobalStyles";

const isTabValidChildren = (
	child: React.ReactNode,
): child is ReactElement<typeof Item> => {
	return React.isValidElement(child) && child.type === Item;
};

type TabsProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Tabs: React.FC<TabsProps> & { Item: typeof Item } = ({
	children,
}) => {
	const id = React.useId();
	const [activeTab, setActiveTab] = React.useState(id + 0);

	const validChildren = React.Children.toArray(children)
		.filter(isTabValidChildren)
		.map((child, i) => ({ ...child, id: id + i }));

	const tabsLabels = validChildren.map((child) => ({
		label: (child.props as unknown as ItemProps).label,
		tabId: child.id,
	}));

	if (validChildren.length !== React.Children.count(children)) {
		console.warn("Invalid children for Tabs");
	}

	return (
		<root.div role="tablist">
			<GlobalStyles />
			<style>{css}</style>
			<TabsContext.Provider value={{ activeTab, setActiveTab }}>
				<List tabsLabels={tabsLabels} />
				{validChildren.map(({ id, ...child }) => {
					return (
						<Tab id={id} key={id}>
							{child}
						</Tab>
					);
				})}
				{React.Children.map(children, (child) => {
					if (!isTabValidChildren(child)) {
						return child;
					}
					return null;
				})}
			</TabsContext.Provider>
		</root.div>
	);
};

Tabs.Item = Item;
