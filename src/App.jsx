import { useState } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
	const [selectedTopic, setSelectedTopic] = useState('Please click a button');

	function handleSelected(selectedButton) {
		setSelectedTopic(selectedButton);
	}
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map(({ image, title, description }) => (
							<CoreConcept
								title={title}
								description={description}
								image={image}
							/>
						))}
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelected('component')}>
							Component
						</TabButton>
						<TabButton onSelect={() => handleSelected('jsx')}>JSX</TabButton>
						<TabButton onSelect={() => handleSelected('props')}>
							Props
						</TabButton>
						<TabButton onSelect={() => handleSelected('state')}>
							State
						</TabButton>
					</menu>
					{selectedTopic}
				</section>
			</main>
		</div>
	);
}

export default App;
