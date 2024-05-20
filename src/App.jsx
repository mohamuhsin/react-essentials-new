import Header from "./components/Header";

import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
