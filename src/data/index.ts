export const links = Object.entries({
	github: 'https://github.com/safinsingh',
	twitter: 'https://twitter.com/safinsingh',
	linkedin: 'https://linkedin.com/in/safinsingh'
})

export const query = `
	query {
		repositoryOwner(login: "safinsingh") {
			... on ProfileOwner {
				itemShowcase {
					items(first: 6) {
						edges {
							node {
								... on Repository {
									name
									description
									url
								}
							}
						}
					}
				}
			}
		}
	}
`

export const reverseColorMode = (mode: string) =>
	mode === 'light' ? 'dark' : 'light'
export const toSentenceCase = (mode: string) =>
	mode.charAt(0).toUpperCase() + mode.slice(1)
