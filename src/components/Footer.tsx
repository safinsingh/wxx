import { useAtom } from 'jotai'

import { colorModeAtom } from '~/data'

const Footer = () => {
	const [colorMode, setColorMode] = useAtom(colorModeAtom)

	return (
		<div className="_footer_div">
			<p className="_footer_p">
				Safin Singh © 2021 | Built with Next &amp; 💚 |{' '}
				<span
					onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
					className="_footer_color_switch"
				>
					{colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode
				</span>
			</p>
		</div>
	)
}
export default Footer
