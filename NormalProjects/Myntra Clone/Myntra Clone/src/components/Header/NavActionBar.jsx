import { CiHeart, CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavActionBar() {
  const bagItems = useSelector((state) => {
    return state.bag;
  });
  const actionItems = [
    {
      id: 1,
      icon: <CiUser className="text-[20px]" />,
      name: "Profile",
      link: "/bag",
    },
    {
      id: 2,
      icon: <CiHeart className="text-[20px]" />,
      name: "Wishlist",
      link: "/bag",
    },
  ];
  return (
    <div className="flex justify-between w-[50vw] sm:w-[30vw] md:w-[25vw] lg:w-[14vw] text-[12px] font-bold">
      {actionItems.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center hover:text-[#FF3F6C] cursor-pointer transition"
          >
            {item.icon}
            <span className="action_name">{item.name}</span>
          </div>
        );
      })}
      <NavLink
        to="/bag"
        className="relative w-[50px] flex flex-col justify-center items-center hover:text-[#FF3F6C] cursor-pointer transition"
      >
        <BsHandbag className="absolute top-0 z-1 text-[18px]" />
        <span className=" flex items-center gap-1">
          <span className="absolute left-0 bottom-0 z-1">Bag</span>
          <span className="absolute bottom-[3px] right-[3px] z-10 flex justify-center items-center p-[12px] h-2 w-2 bg-[#FF3F6C] text-white rounded-[50%]">
            {bagItems.length}
          </span>
        </span>
      </NavLink>
    </div>
  );
}
export default NavActionBar;
