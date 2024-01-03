import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import { useMode } from './mode';

function App() {
  const {mode,setMode} = useMode();
  console.log(mode);
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <label>
            <input
              type="checkbox"
              name="dark"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            ></input>
            <span className="switch"></span>
          </label>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
