import { NavLink } from "react-router";

function NavLinks({ isMobile = false, setIsMenuOpen }) {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Add Items", path: "/add-items" },
  ];
  return isMobile ? (
    <div className="flex flex-col justify-center items-center gap-10 text-1xl font-bold">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) => {
              return isActive ? "text-[#169976]" : "text-black"
            }}
            onClick={() => {
              if (setIsMenuOpen) {
                setIsMenuOpen(false);
              }
            }}
          >
            {link.name}
          </NavLink>
        );
      })}
    </div>
  ) : (
    <nav className="hidden  xl:w-[35vw] lg:flex gap-5 items-center text-1xl font-bold">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) => {
              return isActive ? "text-[#169976] transition hover:border-b-3 hover:text-[#169976] " : "text-black transition hover:border-b-3 hover:text-[#169976]";
            }}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
export default NavLinks;
