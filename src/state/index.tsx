import { createContext, useContext, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '~/styles/theme'

export const useTheme = () => {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		const mode =
			window.localStorage.getItem('THEME') ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light')

		setTheme(mode)
	}, [])

	useEffect(() => {
		localStorage.setItem('THEME', theme)
	}, [theme])

	return { setTheme, theme }
}

export type ThemeContextTy = {
	theme?: string
	setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextTy>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setTheme: () => {}
})

export const ThemeWrapper: React.FC = ({ children }) => {
	const colorContext = useTheme()

	if (!colorContext.theme) return null

	return (
		<>
			<ThemeContext.Provider value={colorContext}>
				{children}
			</ThemeContext.Provider>
			<style global jsx>
				{`
					:root {
						${colorContext.theme === 'light' ? lightTheme : darkTheme}
					}
				`}
			</style>
		</>
	)
}

export const useThemeContext = () => {
	return useContext(ThemeContext)
}
