/* eslint-disable class-methods-use-this */

import type { DocumentContext } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class extends Document {
	public static async getInitialProps(context: DocumentContext) {
		const initialProps = await Document.getInitialProps(context)

		return { ...initialProps }
	}

	public render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
