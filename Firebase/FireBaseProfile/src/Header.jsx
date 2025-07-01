import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1 className="text-6xl font-bold">Welcome to My Website</h1>
      <nav className="flex gap-8 my-5 text-2xl font-bold">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}
export default Header;
