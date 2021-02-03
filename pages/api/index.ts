import fetch from 'isomorphic-unfetch'
import type { NextApiRequest, NextApiResponse } from 'next'
import { query } from '~/data'
import type { ApiResponse } from '~/types'

export const getProjects = async () => {
	const projects = await fetch('https://api.github.com/graphql', {
		body: JSON.stringify({
			query
		}),
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.TOKEN}`,
			'Content-Type': 'application/json'
		},
		method: 'POST'
	}).then((response) => {
		return response.json()
	})

	return {
		props: {
			projects: (projects.data as ApiResponse).repositoryOwner.itemShowcase.items.edges.map(
				(edge) => {
					return edge.node
				}
			)
		}
	}
}

const Handler = async (_: NextApiRequest, response: NextApiResponse) => {
	const { props: data } = await getProjects()

	response.status(200).json(data)
}

export default Handler
