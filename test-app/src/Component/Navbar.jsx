import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-violet-300 shadow-md px-6 py-4 flex flex-col gap-2 items-center justify-between ">
      <h1 className="font-extrabold">My APP</h1>
      <ul className="flex items-center gap-10">
        <li>
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-800 hover:bg-white px-3 py-2 rounded transition duration-300"
          >
            Home
          </Link>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="cursor-pointer text-gray-700 font-medium hover:text-blue-800 hover:bg-white px-3 py-2 rounded transition duration-300">
            Courses 
          </span>

          {dropdown && (
            <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-10">
              <li>
                <Link
                  to="/cse"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-t-md transition duration-200"
                >
                  CSE
                </Link>
              </li>
              <li>
                <Link
                  to="/aiml"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition duration-200"
                >
                  AIML
                </Link>
              </li>
              <li>
                <Link
                  to="/aids"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition duration-200"
                >
                  AIDS
                </Link>
              </li>
              <li>
                <Link
                  to="/it"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-b-md transition duration-200"
                >
                  IT
                </Link>
              </li>
              <li>
                <Link
                  to="/cce"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-b-md transition duration-200"
                >
                  CCE
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-blue-800 hover:bg-white px-3 py-2 rounded transition duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
