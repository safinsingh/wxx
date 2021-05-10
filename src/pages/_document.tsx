/* eslint-disable class-methods-use-this */

import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ThemeScript } from "~/components/ThemeScript";

export default class extends Document {
	public static async getInitialProps(context: DocumentContext) {
		const initialProps = await Document.getInitialProps(context);

		return { ...initialProps };
	}

	public render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<ThemeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
