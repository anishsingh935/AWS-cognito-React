import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import Home from './Home/Home';
import Signup from "./Components/Signup";
import Thankyou from "./Components/ThankyouPage"



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/thankyou" element={<Thankyou/>} />
          {/* add more routes for other pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
