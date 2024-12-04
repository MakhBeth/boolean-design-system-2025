import reset from "../styles/reset.css?raw";
import typography from "../styles/typography.css?raw";

export const GlobalStyles = () => {
	return <style>{`${reset} ${typography}`}</style>;
};
