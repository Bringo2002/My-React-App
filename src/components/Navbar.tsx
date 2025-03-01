import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/jobs" className="text-white">Jobs</Link>
          </li>
          <li>
            <Link to="/add-job" className="text-white">Add Job</Link>        
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
