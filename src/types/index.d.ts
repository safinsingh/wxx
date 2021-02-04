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

export type PostMeta = {
	date: Date
	title: string
}

export type PostFragment = PostMeta & {
	id: string
}

export type Post = PostFragment & {
	innerMD: string
}
