/* eslint-disable import/no-unassigned-import */

import Footer from '~/components/Footer'
import Meta from '~/components/Meta'
import ThemeProvider from '~/components/ThemeProvider'
import '~/styles/root.scss'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider>
			<Meta />
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	)
}

export default App
