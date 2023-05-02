import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home.jsx";
import { Series } from "./pages/Series";

function App() {
  return (
    <Router>
      <div>
        <Header />
     
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/series" element={<Series type="series" />} />
          <Route path="/movies" element={<Series type="movie" />} />
          {/* cualquier otra ruta al home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <footer>
          <p>Pie de página</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
