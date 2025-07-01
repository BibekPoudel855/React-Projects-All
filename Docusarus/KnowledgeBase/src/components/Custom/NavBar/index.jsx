import Link from "@docusaurus/Link";
import Button from "./../Button/index";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
function NavBar() {
  const navLinks = [
    { id: 1, name: "Product", href: "/blog", icon: <MdKeyboardArrowDown /> },
    { id: 2, name: "Pricing", href: "/docs/intro" },
    { id: 3, name: "Help Center", href: "/blog" },
    { id: 4, name: "Blog", href: "/blog/long-blog-post" },
  ];
  return (
    <div className="w-full h-[60px] lg:h-[90px] bg-[#1B1B20] flex justify-between lg:justify-evenly items-center px-[24px] xl:px-[24px] border-t border-b border-gray-500">
      <div>
        <img
          src="https://www.knowledgebase.com/images/logo-dark-mode.svg"
          alt="Logo"
          className="lg:w-[205px] w-[150px]"
        />
      </div>
      <div className="flex items-center gap-2 lg:hidden">
        <p className="text-white !m-0 text-[18px] font-bold">Menu</p>
        <IoMenu className="text-white text-[30px]" />
      </div>
      <div className="hidden lg:w-[400px] lg:flex justify-between items-center mr-10 xl:mr-96">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              to={link.href}
              className={
                "!text-white text-[16px] font-medium flex items-center gap-1"
              }
            >
              {link.name}
              {link?.icon}
            </Link>
          );
        })}
      </div>
      <div className="w-[250px] hidden lg:flex justify-evenly items-center">
        <Link to={"/login"} className="!text-white pr-4">
          Log in
        </Link>
        <Button
          buttonClassName={
            "border-white border-1 text-[18px] text-white font-extrabold px-[16px]  rounded-sm h-[40px] hover:bg-white hover:text-black flex justify-center items-center"
          }
        >
          Sign up free
        </Button>
      </div>
    </div>
  );
}
export default NavBar;
