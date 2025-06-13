import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const token = localStorage.getItem("token");
  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Navigate("/login");
  }

  return (
    <nav className="bg-indigo-600 shadow-md px-6 py-4 flex flex-col gap-3 items-center justify-between text-white  ">
      <h1 className="font-extrabold ">COLLEGE MANAGEMENT</h1>
      <ul className="flex items-center gap-10">
        <li>
          <Link
            to="/home"
            className="text-white font-medium hover:-translate-y-1 hover:text-yellow-300 hover:bg-white px-3 py-2 rounded transition duration-300"
          >
            Home
          </Link>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="cursor-pointer text-white font-medium hover:text-yellow-300 hover:bg-white px-3 py-2 rounded transition duration-300">
            Courses
          </span>

          {dropdown && (
            <ul className="absolute left-0 mt-2 w-56 bg-white hover:bg-gray-100 shadow-lg rounded-md max-w-full">
              <li>
                <Link
                  to="/cse"
                  className="block p-2 text-gray-700 hover:bg-blue-100 rounded-t-md transition duration-200 hover:-translate-y-1"
                >
                  CSE
                </Link>
              </li>
              <li>
                <Link
                  to="/aiml"
                  className="block p-2 text-gray-700 hover:bg-blue-100 transition duration-200 hover:-translate-y-1"
                >
                  AI-ML
                </Link>
              </li>
              <li>
                <Link
                  to="/aids"
                  className=" block p-2 text-gray-700 hover:bg-blue-100 transition duration-200 hover:-translate-y-1"
                >
                  AI-DS
                </Link>
              </li>
              <li>
                <Link
                  to="/it"
                  className="block p-2 text-gray-700 hover:bg-blue-100 rounded-b-md transition duration-200 hover:-translate-y-1"
                >
                  IT
                </Link>
              </li>
              <li>
                <Link
                  to="/cce"
                  className="block p-2 text-gray-700 hover:bg-blue-100 rounded-b-md transition duration-200 hover:-translate-y-1"
                >
                  CCE
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/"
            className="text-white font-medium hover:text-yellow-300 hover:bg-white p-2 rounded transition duration-300"
          >
            Login
          </Link>
        </li>
        <li>
          <button
            to="/"
            className="text-white font-medium hover:text-yellow-300 hover:bg-white p-2 rounded transition duration-300"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
