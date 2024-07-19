import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
	function handleClick(selectedButton) {
		switch (selectedButton) {
			case 'components':
				break;
				case 'jsx':
					break;
					case''
		}
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
						<TabButton onSelect={() => handleClick('component')}>
							Component
						</TabButton>
						<TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
						<TabButton onSelect={() => handleClick('props')}>Props</TabButton>
						<TabButton onSelect={() => handleClick('state')}>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
