import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="bg-white shadow-lg px-30 py-40 rounded-xl">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/register"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white shadow-lg"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white shadow-lg"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
