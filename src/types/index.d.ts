export type Project = {
	name: string
	description: string
	url: string
}

export type ApiResponse = {
	repositoryOwner: {
		itemShowcase: {
			items: {
				edges: Array<{
					node: Project
				}>
			}
		}
	}
}
