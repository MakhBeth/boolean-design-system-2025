export interface ItemProps {
	label: React.ReactNode;
	children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({ children }) => {
	return <div>{children}</div>;
};
