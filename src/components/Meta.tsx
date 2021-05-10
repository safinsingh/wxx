import Head from "next/head";

const Meta = () => (
	<Head>
		{/* Essentials */}
		<meta charSet="utf-8" />
		<title>Safin Singh</title>

		{/* SEO */}
		<meta
			content="Full-stack Developer, Cybersecurity Competitor, High School Student"
			name="description"
		/>
		<meta content="Safin Singh" name="author" />
		<meta
			content="Safin, Singh, Safin Singh, safinsingh, paradox"
			name="keywords"
		/>

		{/* Open Graph */}
		<meta
			content="Web developer and cybersecurity competitor."
			property="og:description"
		/>
		<meta content="https://safin.dev" property="og:url" />
		<meta content="website" property="og:type" />
		<meta content="Safin Singh" property="og:title" />
		<meta content="Safin Singh" property="og:site_name" />
		<meta content="/favicon.png" property="og:image" />
		<meta content="/favicon.png" property="og:image:alt" />
		<meta content="image/png" property="og:image:type" />
		<meta content="512" property="og:image:width" />
		<meta content="512" property="og:image:height" />
		<meta content="en_US" property="og:locale" />

		{/* Twitter */}
		<meta
			content="Web developer and cybersecurity competitor."
			name="twitter:card"
		/>
		<meta content="https://safin.dev" name="twitter:url" />
		<meta content="Safin Singh" name="twitter:title" />
		<meta
			content="Web developer and cybersecurity competitor."
			name="twitter:description"
		/>
		<meta content="/favicon.png" name="twitter:image" />

		{/* WeChat */}
		<meta content="Safin Singh" itemProp="name" />
		<meta content="/favicon.png" itemProp="image" />
		<meta
			content="Web developer and cybersecurity competitor."
			itemProp="description"
			name="description"
		/>

		{/* Apple */}
		<link href="/favicon.png" rel="apple-touch-icon" />
		<link href="/favicon.png" rel="apple-touch-startup-image" />
		<meta content="Safin Singh" name="apple-mobile-web-app-title" />
		<meta content="yes" name="apple-mobile-web-app-capable" />

		{/* IE */}
		<meta content="ie=edge" httpEquiv="x-ua-compatible" />

		{/* QQ */}
		<meta content="portrait" name="x5-orientation" />
		<meta content="true" name="x5-fullscreen" />

		{/* UC Mobile */}
		<meta content="portrait" name="screen-orientation" />
		<meta content="yes" name="full-screen" />
		<meta content="no" name="wap-font-scale" />

		{/* Icons */}
		<meta content="/favicon.png" name="image" />
		<link href="/favicon.png" rel="icon" />

		{/* Misc */}
		<meta content="width=device-width,initial-scale=1" name="viewport" />
		<meta content="#000000" name="theme-color" />
		<link href="https://safin.dev" rel="canonical" />

		{/* External Dependencies */}
		<link href="https://fonts.gstatic.com" rel="preconnect" />
		<link
			href="https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Inter:wght@400;600&family=JetBrains+Mono&display=swap"
			rel="stylesheet"
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
			rel="stylesheet"
		/>
		<link
			crossOrigin="anonymous"
			href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
			integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
			rel="stylesheet"
		/>
	</Head>
);

export default Meta;
