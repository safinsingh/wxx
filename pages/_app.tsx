import Meta from '~/components/Meta'
// eslint-disable-next-line import/no-unassigned-import
import '~/styles/root.scss'

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Meta />
			<Component {...pageProps} />
		</>
	)
}

export default App
