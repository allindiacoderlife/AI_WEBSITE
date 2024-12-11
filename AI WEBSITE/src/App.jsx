import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
