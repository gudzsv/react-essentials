import { useState } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

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
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept key={conceptItem.title} {...conceptItem} />
						))}
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => handleSelected('components')}
						>
							Component
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleSelected('jsx')}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleSelected('props')}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleSelected('state')}
						>
							State
						</TabButton>
					</menu>
					{!selectedTopic && <p>Please select a topic.</p>}
					{selectedTopic && (
						<div id='tab-content'>
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
