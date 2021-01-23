import fetch from 'isomorphic-unfetch'
import type { NextApiRequest, NextApiResponse } from 'next'

import type { ApiResponse } from '~/types'
import { query } from '~/data'

export const getProjects = async () => {
	const projects = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.TOKEN}`
		},
		body: JSON.stringify({
			query
		})
	}).then((p) => p.json())

	return {
		props: {
			projects: (projects.data as ApiResponse).repositoryOwner.itemShowcase.items.edges.map(
				(edge) => edge.node
			)
		}
	}
}

const Handler = async (_: NextApiRequest, res: NextApiResponse) => {
	const { props: data } = await getProjects()
	res.status(200).json(data)
}

export default Handler
