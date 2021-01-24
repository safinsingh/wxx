import { useAtom } from 'jotai'

import { colorModeAtom, reverseColorMode } from '~/data'

const Footer = () => {
	const [colorMode, setColorMode] = useAtom(colorModeAtom)

	return (
		<div className="_footer_div">
			<p className="_footer_p">
				Safin Singh © 2021 | Built with Next &amp; 💚 |{' '}
				<span
					onClick={() => setColorMode(reverseColorMode(colorMode))}
					className="_footer_color_switch"
				>
					{reverseColorMode(colorMode).charAt(0).toUpperCase() +
						reverseColorMode(colorMode).slice(1)}{' '}
					Mode
				</span>
			</p>
		</div>
	)
}
export default Footer
