import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { reverseColorMode, modeAsEmoji } from "~/data";

const Footer = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="_footer_div">
			<p className="_footer_p">
				Safin Singh © 2021 |{" "}
				<span
					className="_footer_color_switch"
					onClick={() => {
						setTheme(reverseColorMode(theme));
					}}
				>
					{modeAsEmoji(theme)}
				</span>
			</p>
		</div>
	);
};

export default Footer;
