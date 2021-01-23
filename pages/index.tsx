import type { GetServerSideProps } from 'next'

import { getProjects } from './api'

import Card from '~/components/Card'
import type { INode } from '~/types'
import { links } from '~/data'
import Section from '~/components/Section'
import Container from '~/components/Container'
import Footer from '~/components/Footer'
import Links from '~/components/Links'
import Grid from '~/components/Grid'

const Home = ({ projects }: { projects: INode[] }) => (
	<>
		<Container>
			<Section name="Hi! I'm Safin 👋" alternateClassName="hi">
				<Links links={links} />
			</Section>
			<Section name="About ✨">
				<p>
					Hey! I’m Safin Singh, a self-taught high-school student, full-stack
					developer, and cybersecurity enthusiast.
				</p>
				<p>
					I’ve developed production-ready applications in accordance with
					industry standards with popular frameworks like React. In my free
					time, I enjoy creating side projects with TypeScript &amp; Rust and
					playing the cello.
				</p>
				<p>
					I’m currently not looking for internships at the moment, but I will be
					in the summer of <b>2021</b>. In the meantime, feel free to shoot me
					an{' '}
					<a href="mailto:safin.singh@gmail.com" className="_email">
						email!
					</a>
				</p>
			</Section>
		</Container>
		<Container large={true}>
			<Section name="Projects ⚒️">
				<Grid>
					{projects.map((projectProps) => (
						<Card {...projectProps} key={projectProps.name} />
					))}
				</Grid>
			</Section>
		</Container>
		<Footer />
	</>
)

export const getServerSideProps: GetServerSideProps = async () => {
	return getProjects()
}

export default Home
