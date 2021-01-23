export interface INode {
	name: string
	description: string
	url: string
}

export interface ApiResponse {
	repositoryOwner: {
		itemShowcase: {
			items: {
				edges: Array<{
					node: INode
				}>
			}
		}
	}
}
