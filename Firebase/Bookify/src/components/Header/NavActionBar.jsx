import { CiHeart, CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavActionBar() {
  const actionItems = [
    {
      id: 1,
      icon: <CiUser className="text-[20px]" />,
      name: "Profile",
      link: "/profile",
    },
    {
      id: 2,
      icon: <CiHeart className="text-[20px]" />,
      name: "Wishlist",
      link: "/",
    },
  ];
  return (
    <div className="flex justify-between w-[50vw] sm:w-[30vw] md:w-[25vw] lg:w-[14vw] text-[12px] font-bold">
      {actionItems.map((item) => {
        return (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? "text-[#169976] transition hover:text-[#169976]"
                : "text-black transition hover:text-[#169976]"
            }
          >
            <div className="flex flex-col justify-center items-center cursor-pointer transition">
              {item.icon}
              <span className="action_name">{item.name}</span>
            </div>
          </NavLink>
        );
      })}
      <NavLink
        to="/bag"
        className="relative w-[50px] flex flex-col justify-center items-center hover:text-[#169976] cursor-pointer transition"
      >
        <BsHandbag className="absolute top-0 z-1 text-[18px]" />
        <span className=" flex items-center gap-1">
          <span className="absolute left-0 bottom-0 z-1">Bag</span>
          <span className="absolute bottom-[3px] right-[3px] z-10 flex justify-center items-center p-[12px] h-2 w-2 bg-[#1DCD9F] text-white rounded-[50%]">
            1
          </span>
        </span>
      </NavLink>
    </div>
  );
}
export default NavActionBar;
