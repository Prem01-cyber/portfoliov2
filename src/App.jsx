import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Splash } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
