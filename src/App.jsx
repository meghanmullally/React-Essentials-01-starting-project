import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton.jsx';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props, 'state'
    setSelectedTopic(selectedButton);
    // console.log(setSelectedTopic);
  }

  console.log('APP COMP RENDERING')

  // last option
  // let tabContent = <p>Please select a topic.</p>

  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>
  //                 {EXAMPLES[selectedTopic].code}
  //               </code>
  //             </pre>
  //           </div>
  //   )
  // }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            {/* alternative to the above code */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* turnary expression  */}
          {!selectedTopic ? (
            <p>Please select a topic.</p>) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )}

          {/* another option  */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
            )} */}

          {/* {tabContent} */}

        </section>
      </main>
    </div>
  );
}

export default App;