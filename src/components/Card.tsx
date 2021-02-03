const Card = ({
	name,
	description,
	url
}: {
	name: string
	description: string
	url: string
}) => (
	<a href={url} rel="noreferrer" target="_blank">
		<div className="_card">
			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	</a>
)

export default Card
