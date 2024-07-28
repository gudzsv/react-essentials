import { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelected(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	return (
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
	);
}
