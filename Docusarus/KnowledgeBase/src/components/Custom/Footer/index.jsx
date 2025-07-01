import UpperSectionFooter from "./UpperSectionFooter";
import LowerSectionFooter from "./LowerSectionFooter";
import MainSectionFooter from "./MainSectionFooter";
function Footer() {
  return (
    <div className="bg-[#1B1B20] text-white">
      <UpperSectionFooter />
      <div className="border-t border-b border-[#2A2A2E]">
        <MainSectionFooter />
      </div>
      <LowerSectionFooter />
    </div>
  );
}
export default Footer;
