import Meta from '~/components/Meta'
import '~/styles/root.css'

const App = ({ Component, pageProps }) => (
	<>
		<Meta />
		<Component {...pageProps} />
	</>
)

export default App
