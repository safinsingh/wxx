import type { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getProjects } from '~/api'
import Card from '~/components/Card'
import Container from '~/components/Container'
import Footer from '~/components/Footer'
import Grid from '~/components/Grid'
import Links from '~/components/Links'
import Section from '~/components/Section'
import { links } from '~/data'
import { darkTheme, lightTheme } from '~/styles/theme'
import type { INode } from '~/types'

const Home: React.FC<{ projects: INode[] }> = ({ projects }) => {
	const [colorMode, setColorMode] = useState(undefined)

	useEffect(() => {
		const mode =
			window.localStorage.getItem('THEME') ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light')

		setColorMode(mode)
	}, [])

	useEffect(() => {
		localStorage.setItem('THEME', colorMode)
	}, [colorMode])

	if (!colorMode) return null

	return (
		<>
			<Container>
				<Section alternateClassName="hi" name="Hi! I'm Safin 👋">
					<Links links={links} />
				</Section>
				<Section name="About ✨">
					<p>
						Hey! I’m Safin Singh, a self-taught high-school student, full-stack
						developer, and cybersecurity competitor.
					</p>
					<p>
						I’ve developed production-ready applications in accordance with
						industry standards using popular web frameworks such as React. In my
						free time, I enjoy making side projects with TypeScript &amp; Rust
						and playing the cello.
					</p>
					<p>
						I’m currently not looking for internships at the moment, but I will
						be in the summer of <b>2021</b>. In the meantime, feel free to shoot
						me an{' '}
						<a className="_email" href="mailto:safin.singh@gmail.com">
							email!
						</a>
					</p>
				</Section>
			</Container>
			<Container large>
				<Section name="Projects 🔨">
					<Grid>
						{projects.map((projectProps) => (
							<Card {...projectProps} key={projectProps.name} />
						))}
					</Grid>
				</Section>
			</Container>
			<Footer {...{ colorMode, setColorMode }} />
			<style global jsx>
				{`
					:root {
						${colorMode === 'light' ? lightTheme : darkTheme}
					}
				`}
			</style>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	return getProjects()
}

export default Home
