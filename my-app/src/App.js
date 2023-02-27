import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home';
import Services from './components/services'; 
import Footer  from './components/footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
