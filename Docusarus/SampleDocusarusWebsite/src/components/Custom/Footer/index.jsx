import Button from "../Button";
import FooterLowerSection from "./footerLowerSection";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import footerConstants from "./footerConstants";
function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "About Us", url: "#" },
        { name: "Help", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "GitHub", url: "#" },
        { name: "GitLab", url: "#" },
        { name: "Stack Overflow", url: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: <FaFacebook /> },
        { name: <FaTwitter /> },
        { name: <FaLinkedin /> },
        { name: <FaInstagram /> },
      ],
    },
  ];
  return (
    <footer className="w-full bg-black text-white pt-16 pb-4">
      <div className="w-[90vw] mx-auto flex justify-between">
        <div className="flex flex-col gap-6 w-[30%]">
          <h1>NPS</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            eligendi.
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-white text-black"
            />
            <Button buttonClassName="bg-white text-black ml-2 py-2 px-4 rounded">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex justify-between w-[50%]">
          <ul className="">
            <h3>Quick Links</h3>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
          <ul>
            <h3>Resouces Us</h3>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">GitLab</a>
            </li>
            <li>
              <a href="#">Stack Overflow</a>
            </li>
          </ul>

          <ul>
            <h3>Follow Us On</h3>
            <div className="flex gap-4 text-[24px]">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaInstagram />
              </li>
            </div>
          </ul>

        </div>
      </div>
      <FooterLowerSection />
    </footer>
  );
}
export default Footer;
