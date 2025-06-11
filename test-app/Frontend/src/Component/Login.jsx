import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen flex items-center justify-center bg-slate-300">
      <div className="flex items-center justify-center rounded-lg bg-gray-100"> 
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-extrabold mb-6 text-center">Login</h1>
          <form className="flex flex-col gap-4">
            <p className="font-semibold text-gray-700 mb-2">Email</p>
            <input
              type="text"
              className="w-full px-3 py-3 border rounded-lg focus:outline-none"
              required={true}
            />
            <p className="font-semibold text-gray-700 mb-2">Password</p>
            <input
              type="password"
              className="w-full px-3 py-3 border rounded-lg focus:outline-none"
              required={true}
            />
          </form>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors duration-300" onClick={()=>navigate("/home")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
