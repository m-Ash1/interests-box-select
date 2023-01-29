import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title />
      <div className="card-holder">
        <Card title="Binary" class="fa-solid fa-calculator" />
        <Card title="Scheme" class="fa-solid fa-crop-simple" />
        <Card title="Drawing" class="fa-solid fa-pen-ruler" />
        <Card title="Web" class="fa-solid fa-sitemap" />
        <Card title="Bug" class="fa-solid fa-bug" />
        <Card title="Cloud" class="fa-solid fa-cloud" />
        <Card title="Coding" class="fa-solid fa-code" />
        <Card title="Puzzle" class="fa-solid fa-puzzle-piece" />
      </div>
    </>
  );
}

export default App;
