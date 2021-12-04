import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import Navbar from './Navbar';
import Cart from './ui/Cart';
import Posts from './pages/Posts';

// Home
// About
// Items page
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/posts"
            element={<Posts />}
          />
          <Route path="about" element={<About />} />
          <Route path="items/:categoryId" element={<Items />} />
        </Routes>
      </BrowserRouter>
      <Cart />
    </div>
  );
}

export default App;
