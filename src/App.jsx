import Header from "./Header";

import componentsImg from './assets/components.png';

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts title="Components" description="Core UI Building blocks" image={componentsImg} />
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App;