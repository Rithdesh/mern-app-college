import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Courses from "./Component/Courses";
import Navbar from "./Component/Navbar";
import Cse from "./Component/Courses/Cse";
import IT from "./Component/Courses/IT";
import CCE from "./Component/Courses/CCE";
import AIML from "./Component/Courses/AIML";
import AIDS from "./Component/Courses/AIDS";
import ProtectedRoute from "./Component/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            
              <Home />
            
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              {console.log("Accessing Courses Page")}
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cse"
          element={
            <ProtectedRoute>
              <Cse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/it"
          element={
            <ProtectedRoute>
              <IT />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cce"
          element={
            <ProtectedRoute>
              <CCE />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aiml"
          element={
            <ProtectedRoute>
              <AIML />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aids"
          element={
            <ProtectedRoute>
              <AIDS />
            </ProtectedRoute>
          }
        />
        <Route
          path="/navbar"
          element={
            <ProtectedRoute>
              <Navbar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
