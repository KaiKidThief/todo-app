import Header from "./components/Header";
import ParticleBg from "./components/ParticleBg";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <ParticleBg />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Todo />
      </div>
    </div>
  );
}

export default App;
