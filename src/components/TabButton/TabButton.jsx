export default function TabButton({ children, onSelect }) {
	return (
		<li>
			<button onClick={onSelect} type='button'>
				{children}
			</button>
		</li>
	);
}
