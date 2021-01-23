import { Provider } from 'jotai'

import Meta from '~/components/Meta'
import '~/styles/root.css'

const App = ({ Component, pageProps }) => (
	<Provider>
		<Meta />
		<Component {...pageProps} />
	</Provider>
)

export default App
