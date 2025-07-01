import { CiSearch } from "react-icons/ci";
import { useFirebase } from "../../context/FirebaseContext";
import { useState } from "react";

function NavSearch() {
  const { getFirestoreBookData } = useFirebase();
  return (
    <div className="hidden lg:flex items-center gap-3 px-[10px] lg:[5vw] xl:w-[23vw] bg-[#F5F5F6] rounded-[2px] border border-[#DDDDDD] outline-none text-[#222222]">
      <CiSearch className="text-[20px] font-bold"/>
      <input
        placeholder="Search for products, brands and more"
        className="w-[100%] h-[40px] py-[10px] text-1xl] border-0 truncate outline-0 "
      />
    </div>
  );
}

export default NavSearch;