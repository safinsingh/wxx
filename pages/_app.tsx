import Meta from '~/components/Meta'
import '~/styles/root.scss'

const App = ({ Component, pageProps }) => (
	<>
		<Meta />
		<Component {...pageProps} />
	</>
)

export default App
