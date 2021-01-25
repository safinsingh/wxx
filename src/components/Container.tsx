const Container: React.FC<{ large?: boolean }> = ({ children, large }) => (
	<div className={`_container ${large && '_container_large'}`}>{children}</div>
)

export default Container
