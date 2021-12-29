import "./App.css";
import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      <Books searchString="books" limitNum={30} />
    </div>
  );
}

export default App;
