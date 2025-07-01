import { NavLink } from "react-router";

function NavLogo() {
  return (
    <NavLink to="/">
      <div className="logo_container">
        <img
          className="w-auto h-[36px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
          alt="Logo"
        />
      </div>
    </NavLink>
  );
}
export default NavLogo;
