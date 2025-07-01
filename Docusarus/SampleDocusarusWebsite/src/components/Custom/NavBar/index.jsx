import Link from "@docusaurus/Link";
import Button from "./../Button/index"
import { FaLanguage } from "react-icons/fa";
const navList = [
  { to: "/", name: "Home"},
  { to: "/docs/intro", name: "DOCS" },
  { to: "/blog", name: "Guides" },
  { to: "/docs/intro", name: "API Reference" },
];

function Nav() {

  return (
    <nav className="nav-bar flex justify-between items-center h-[50px]">
      <span className="flex items-center text-3xl font-bold">NPS</span>
      <div className="w-96 flex justify-between text-black text-[18px]">
        {navList.map((link,idx) => (
          <Link key={idx} to={link.to} style={{textDecoration:"none", color:"black"}}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between w-60">
        <Button buttonClassName="flex items-center hover:bg-gray-200 px-2.5 p-1.5 rounded text-[18px]"><span className="mr-2 text-[20px]"><FaLanguage/></span> Language</Button>
        <Button buttonClassName="bg-black text-white rounded text-[18px] px-4 py-1 hover:bg-gray-700">SignUp</Button>
      </div>
    </nav>
  );
}
export default Nav;
