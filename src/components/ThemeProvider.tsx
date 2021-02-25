import { createContext, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '~/styles'
import type { ThemeContextTy } from '~/types'

export const ThemeContext = createContext<ThemeContextTy>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setTheme: () => {}
})

const ThemeProvider: React.FC = ({ children }) => {
	const [theme, rawSetTheme] = useState(undefined)

	useEffect(() => {
		const root = window.document.documentElement
		const mode = root.style.getPropertyValue('--initial-color-mode')

		rawSetTheme(mode)
	}, [])

	const setTheme = (newTheme: string) => {
		const css = newTheme === 'dark' ? darkTheme : lightTheme
		const rootRef = window.document.documentElement

		css.trim()
			.split('\n')
			.map((line) => line.split(': '))
			.forEach((property) => {
				rootRef.style.setProperty(property[0], property[1].slice(0, -1))
			})

		rawSetTheme(newTheme)
	}

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
