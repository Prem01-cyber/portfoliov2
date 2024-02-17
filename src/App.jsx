import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Splash, Data } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
