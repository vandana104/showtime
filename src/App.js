import { Route, Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
