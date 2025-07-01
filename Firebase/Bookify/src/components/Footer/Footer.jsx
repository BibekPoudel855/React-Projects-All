import CopyrightFooter from "./CopyrightFooter";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <>
      <footer className="w-[90vw] mx-auto text-[20px] md:text-[16px]">
        <FooterLinks />
        <hr />
        <CopyrightFooter />
      </footer>
    </>
  );
}
export default Footer;
