import "./App.css";
import { Routes,Route } from "react-router-dom";
import Login from "./Component/Login";
import Home from './Component/Home'
import Courses from "./Component/Courses";
import Navbar from "./Component/Navbar";
import Cse from "./Component/Courses/Cse";
import IT from "./Component/Courses/IT";
import CCE from "./Component/Courses/CCE";
import AIML from "./Component/Courses/AIML";
import AIDS from "./Component/Courses/AIDS";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path ='/cse' element={<Cse/>} />
        <Route path="/it" element={<IT />} />
        <Route path="/cce" element={<CCE />} />
        <Route path="/aiml" element={<AIML />} />
        <Route path="/aids" element={<AIDS />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
