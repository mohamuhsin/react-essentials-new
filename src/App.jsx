import Header from "./Header";

function CoreConcepts() {
  return (
    <li>
      <img src="" alt="" />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
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
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App;