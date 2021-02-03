/* eslint-disable import/no-unassigned-import */

import Meta from '~/components/Meta'
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
