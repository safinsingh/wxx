import Head from 'next/head'

const Meta = () => (
	<Head>
		{/* Essentials */}
		<meta charSet="utf-8" />
		<title>Safin Singh</title>

		{/* SEO */}
		<meta
			name="description"
			content="Full-stack Developer, Cybersecurity Competitor, High School Student"
		/>
		<meta name="author" content="Safin Singh" />
		<meta
			name="keywords"
			content="Safin, Singh, Safin Singh, safinsingh, paradox"
		/>

		{/* Open Graph */}
		<meta
			property="og:description"
			content="Web developer and cybersecurity competitor."
		/>
		<meta property="og:url" content="https://safin.dev" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Safin Singh" />
		<meta property="og:site_name" content="Safin Singh" />
		<meta property="og:image" content="/logo.png" />
		<meta property="og:image:alt" content="/logo.png" />
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="1200" />
		<meta property="og:locale" content="en_US" />

		{/* Twitter */}
		<meta
			name="twitter:card"
			content="Web developer and cybersecurity competitor."
		/>
		<meta name="twitter:url" content="https://safin.dev" />
		<meta name="twitter:title" content="Safin Singh" />
		<meta
			name="twitter:description"
			content="Web developer and cybersecurity competitor."
		/>
		<meta name="twitter:image" content="/logo.png" />

		{/* WeChat */}
		<meta itemProp="name" content="Safin Singh" />
		<meta itemProp="image" content="/logo.png" />
		<meta
			name="description"
			itemProp="description"
			content="Web developer and cybersecurity competitor."
		/>

		{/* Apple */}
		<link rel="apple-touch-icon" href="/logo.png" />
		<link rel="apple-touch-startup-image" href="/logo.png" />
		<meta name="apple-mobile-web-app-title" content="Safin Singh" />
		<meta name="apple-mobile-web-app-capable" content="yes" />

		{/* IE */}
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />

		{/* QQ */}
		<meta name="x5-orientation" content="portrait" />
		<meta name="x5-fullscreen" content="true" />

		{/* UC Mobile */}
		<meta name="screen-orientation" content="portrait" />
		<meta name="full-screen" content="yes" />
		<meta name="wap-font-scale" content="no" />

		{/* Icons */}
		<meta name="image" content="/logo.png" />
		<link rel="icon" href="/logo.png" />

		{/* Misc */}
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<meta name="theme-color" content="#040404" />
		<link rel="canonical" href="https://safin.dev" />

		{/* External Dependencies */}
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
			rel="stylesheet"
		/>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
			integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
			crossOrigin="anonymous"
		/>
	</Head>
)

export default Meta
