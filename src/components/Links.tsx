const Links = ({ links }: { links: string[][] }) => (
	<div className="_links">
		{links.map(([key, value], index) => {
			return (
				<span className="_link_wrapper" key={key}>
					<a className="_social_link" href={value}>
						~{key}
					</a>
					{index !== links.length - 1 && ' · '}
				</span>
			)
		})}
	</div>
)

export default Links
