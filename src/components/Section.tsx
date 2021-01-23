const Section: React.FC<{ name: string; alternateClassName?: string }> = ({
	name,
	children,
	alternateClassName
}) => {
	return (
		<div
			className={`_section _section_${
				alternateClassName ?? name.split(' ')[0].toLowerCase()
			}`}
		>
			<h1>{name}</h1>
			{children}
		</div>
	)
}

export default Section
