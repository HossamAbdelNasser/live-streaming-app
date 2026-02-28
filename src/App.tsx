import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Room from "./Room";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
