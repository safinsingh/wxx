/* eslint-disable import/no-unassigned-import */

import Footer from '~/components/Footer'
import Meta from '~/components/Meta'
import { ThemeWrapper } from '~/state'
import '~/styles/root.scss'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeWrapper>
			<Meta />
			<Component {...pageProps} />
			<Footer />
		</ThemeWrapper>
	)
}

export default App
