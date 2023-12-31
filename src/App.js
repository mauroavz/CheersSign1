import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./sign";
import Signclient from "./signclient";
import { Header } from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/sign/:parametro/:pdfLink" element={<Sign />} />
          <Route path="/signclient/:pdfLink/:codigo" element={<Signclient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
