import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/home" element={
                    <Home />
                  } exact />
          
          
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
