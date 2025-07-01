import { NavLink } from "react-router";

function NavLinks({ isMobile = false, setIsMenuOpen }) {
  const links = [
    { id: 1, name: "Men", path: "/" },
    { id: 2, name: "Women", path: "/" },
    { id: 3, name: "Kids", path: "/bag" },
    { id: 4, name: "Home & Living", path: "/" },
    { id: 5, name: "Beauty", path: "/" },
    { id: 6, name: "Studio", path: "/" },
  ];
  return isMobile ? (
    <div className="flex flex-col justify-center items-center gap-10 text-1xl font-bold">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className="transition active:border-b-3 active:text-[#FF3F6C]"
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
            className="transition hover:border-b-3 hover:text-[#FF3F6C] "
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
export default NavLinks;
