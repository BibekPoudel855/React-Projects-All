import { useState } from "react";
import NavActionBar from "./NavActionBar";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow w-[100vw]">
      <header className="flex items-center justify-between h-[80px] w-[90vw] mx-auto">
        <NavLogo />
        <NavLinks />
        <IoMenu
          className="text-[30px] lg:hidden cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
        <NavSearch />
        <NavActionBar />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </div>
  );
}
export default Header;
