import { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelected(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	return (
		<Section id='examples' title='Examples'>
			<Tabs
				buttonsContainer='menu'
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onClick={() => handleSelected('components')}
						>
							Component
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onClick={() => handleSelected('jsx')}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onClick={() => handleSelected('props')}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onClick={() => handleSelected('state')}
						>
							State
						</TabButton>
					</>
				}
			>
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
			</Tabs>
		</Section>
	);
}
