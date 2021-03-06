import type { NextApiResponse } from "next";
import fetch from "node-fetch";
import { defaultProjects, query } from "~/data";
import type { ApiResponse } from "~/types";

export const getProjects = async () => {
	const { data: response } = await fetch("https://api.github.com/graphql", {
		body: JSON.stringify({
			query
		}),
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.TOKEN}`,
			"Content-Type": "application/json"
		},
		method: "POST"
	}).then((rawResponse) => {
		return rawResponse.json();
	});

	return (
		(response as ApiResponse)?.repositoryOwner.itemShowcase.items.edges.map(
			(edge) => edge.node
		) ?? defaultProjects()
	);
};

export default async (_: unknown, response: NextApiResponse) => {
	const data = await getProjects();
	response.status(200).json(data);
};
