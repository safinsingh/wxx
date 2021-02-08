// inspired by https://www.joshwcomeau.com/react/dark-mode/

import { darkTheme, lightTheme } from '~/styles'

const script = `
(function () {
	const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
	const rootRef = document.documentElement;

	(darkMode ? \`${darkTheme}\` : \`${lightTheme}\`)
		.trim()
		.split('\\n')
		.map((line) => line.split(': '))
		.forEach((prop) => {
			rootRef.style.setProperty(
				prop[0],
				prop[1].slice(0, -1)
			)
		})

	rootRef.style.setProperty(
		'--initial-color-mode',
		darkMode ? 'dark' : 'light'
	)
})()
`

export const ThemeScript = () => (
	<script
		// eslint-disable-next-line react/no-danger
		dangerouslySetInnerHTML={{
			__html: script
		}}
	/>
)
