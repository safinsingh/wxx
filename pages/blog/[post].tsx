import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import Container from '~/components/Container'
import Section from '~/components/Section'
import { getSinglePost, getAllPosts } from '~/posts'
import { useThemeContext } from '~/state'
import { dark, light } from '~/styles/code'

const CodeBlock: React.FC<{ language: string; value: string }> = ({
	language,
	value
}) => {
	const { theme } = useThemeContext()

	return (
		<SyntaxHighlighter
			language={language}
			style={theme === 'light' ? light : dark}
		>
			{value}
		</SyntaxHighlighter>
	)
}

const Post: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	post
}) => (
	<Container large>
		<Section alternateClassName="hi _bottom" name={post.title}>
			<h2 className="_post_date">{post.date}</h2>
			<ReactMarkdown
				className="_post_body"
				escapeHtml={false}
				renderers={{ code: CodeBlock }}
				source={post.innerMD}
			/>
			<hr />
			<Link href="/">
				<a className="_social_link">👈 back home</a>
			</Link>
		</Section>
	</Container>
)

export const getStaticProps = async ({ params: { post } }) => ({
	props: {
		post: await getSinglePost(post as string)
	}
})

export const getStaticPaths = async () => {
	return {
		fallback: false,
		paths: await getAllPosts()
	}
}

export default Post
