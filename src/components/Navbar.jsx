import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-600 to-blue-600 shadow-lg">
      <div className="flex justify-between items-center mx-auto py-2 px-4 sm:px-7 max-w-7xl">

        <div className="text-2xl font-extrabold text-white">
          Ur<span className="text-blue-200">TODO</span>
        </div>

        <ul className="flex gap-4 text-white">
          <li>
            <Link to="/home" className="px-3 py-1 rounded-md hover:bg-white/20">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="px-3 py-1 rounded-md hover:bg-white/20">
              To-Do's
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
