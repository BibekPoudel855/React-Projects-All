
import HeaderCompanyList from "./HeaderCompanyDetail";
import HeaderInput from "./HeaderInput";

function Header() {
  return (
    <div className="flex gap-1 flex-col items-center justify-center py-4 md:py-5 w-[90%] mx-auto">
      <HeaderCompanyList />
      <HeaderInput />
    </div>
  );
}
export default Header;
