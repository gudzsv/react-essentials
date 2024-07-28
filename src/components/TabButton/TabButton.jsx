export default function TabButton({ children, isSelected, ...props }) {
	return (
		<li>
			<button
				className={isSelected ? 'active' : undefined}
				{...props}
				type='button'
			>
				{children}
			</button>
		</li>
	);
}
