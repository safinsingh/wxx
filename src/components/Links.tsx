const Links = ({ links }: { links: string[][] }) => (
	<div className="_links">
		{links.map(([k, v], idx) => (
			<span key={k} className="_link_wrapper">
				<a href={v} className="_social_link">
					~{k}
				</a>
				{idx !== links.length - 1 && ' · '}
			</span>
		))}
	</div>
)

export default Links
