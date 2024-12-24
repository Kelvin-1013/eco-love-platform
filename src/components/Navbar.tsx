import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-earth-green text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EarthGuard</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-accent-secondary transition-colors">Home</Link>
          <Link to="/news" className="hover:text-accent-secondary transition-colors">Planet News</Link>
          <Link to="/action" className="hover:text-accent-secondary transition-colors">Take Action</Link>
          <Link to="/community" className="hover:text-accent-secondary transition-colors">Community</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;