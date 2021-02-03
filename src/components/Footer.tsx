import type { Dispatch, SetStateAction } from 'react'
import { reverseColorMode, toSentenceCase } from '~/data'

const Footer: React.FC<{
	colorMode: string
	setColorMode: Dispatch<SetStateAction<string>>
}> = ({ colorMode, setColorMode }) => (
	<div className="_footer_div">
		<p className="_footer_p">
			Safin Singh © 2021 | Built with Next &amp; 💚 |{' '}
			<span
				className="_footer_color_switch"
				onClick={() => {
					setColorMode(reverseColorMode(colorMode))
				}}
			>
				{toSentenceCase(reverseColorMode(colorMode))} Mode
			</span>
		</p>
	</div>
)

export default Footer
