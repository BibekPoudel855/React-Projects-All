import { useTable3Context } from "../context/Table3ContextProvider.jsx";
import HeaderCompanyList from "../../TableFirst/Header/HeaderCompanyDetail.jsx";
import HeaderInput from "./HeaderInput.jsx";
import ProductEmptyMessage from "./ProductEmptyMessage.jsx";
function Header() {
 const { selectedProducts } = useTable3Context();
 
  return (
    <>
      <HeaderCompanyList />
      <HeaderInput />
      {selectedProducts.length === 0 && <ProductEmptyMessage />}
    </>
  );
}
export default Header;
