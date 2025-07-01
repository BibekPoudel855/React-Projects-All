import { NavLink } from "react-router";

function NavLogo() {
  return (
    <NavLink to="/">
      <div className="logo_container">
        <img className="w-[55px] h-[36px]" src="./../../../public/images/myntra_logo.webp" alt="Myntra Home" />
      </div>
    </NavLink>
  );
}
export default NavLogo;
