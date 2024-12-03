import type React from "react";
import "./Badge.css";

export const Badge: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className="badge">{children}</div>;
};
