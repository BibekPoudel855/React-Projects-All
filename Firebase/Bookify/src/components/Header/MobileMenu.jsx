import { IoClose } from "react-icons/io5";
import NavLinks from "./NavLinks";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={` fixed top-[20px] left-[0] w-[100vw] bg-white z-100 py-10 transition-all ${
        isMenuOpen ? "translate-y-0 opacity-90" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex justify-center items-center h-[60px]">
        <IoClose
          className="text-[30px] cursor-pointer mb-10"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <nav>
        <NavLinks isMobile={true} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </div>
  );
}

export default MobileMenu;
