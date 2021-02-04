import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { getProjects } from '~/api'
import Card from '~/components/Card'
import Container from '~/components/Container'
import Grid from '~/components/Grid'
import Links from '~/components/Links'
import Section from '~/components/Section'
import { links } from '~/data'
import { getPosts } from '~/posts'

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	projects,
	postData
}) => (
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
				I’ve developed production-ready applications in accordance with industry
				standards using popular web frameworks such as React. In my free time, I
				enjoy making side projects with TypeScript &amp; Rust and playing the
				cello.
			</p>
			<p>
				I’m currently not looking for internships at the moment, but I will be
				in the summer of <b>2021</b>. In the meantime, feel free to shoot me an{' '}
				<a className="_email" href="mailto:safin.singh@gmail.com">
					email!
				</a>
			</p>
		</Section>
		<Section name="Projects 🔨">
			<Grid>
				{projects.map((projectProps) => (
					<Card {...projectProps} key={projectProps.name} />
				))}
			</Grid>
		</Section>
		<Section name="Posts 📜">
			{postData.slice(0, 3).map((frag) => (
				<Link href={`/blog/${frag.id}`}>
					<div className="_clickable">
						<h2 className="_post_frag_title">{frag.title}</h2>
						<h3 className="_post_frag_date">{frag.date}</h3>
					</div>
				</Link>
			))}
		</Section>
	</Container>
)

export const getStaticProps = async () => {
	return {
		props: {
			postData: await getPosts(),
			projects: await getProjects()
		},
		// rip vercel :pray:
		revalidate: 1
	}
}

export default Home
