import { reverseColorMode, toSentenceCase } from '~/data'
import { useThemeContext } from '~/state'

const Footer = () => {
	const { theme, setTheme } = useThemeContext()

	return (
		<div className="_footer_div">
			<p className="_footer_p">
				Safin Singh © 2021 | Built with Next &amp; 💚 |{' '}
				<span
					className="_footer_color_switch"
					onClick={() => {
						setTheme(reverseColorMode(theme))
					}}
				>
					{toSentenceCase(reverseColorMode(theme))} Mode
				</span>
			</p>
		</div>
	)
}

export default Footer
