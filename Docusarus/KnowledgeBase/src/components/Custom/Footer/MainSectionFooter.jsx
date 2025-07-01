import Button from "./../Button/index";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function MainSectionFooter() {
  const footerLinks = [
    {
      id: 1,
      title: "Product",
      children: [
        {
          id: 1,
          title: "Free trial",
          path: "/free-trial",
        },
        {
          id: 2,
          title: "Pricing",
          path: "/pricing",
        },
        {
          id: 3,
          title: "Features",
          path: "/features",
        },
        {
          id: 4,
          title: "Knowledge Management",
          path: "/knowledge-management",
        },
        {
          id: 5,
          title: "Knowledge Visualisation",
          path: "/knowledge-visualisation",
        },
        {
          id: 6,
          title: "Reporting",
          path: "/reporting",
        },
        {
          id: 7,
          title: "LiveChat Integration",
          path: "/livechat-integration",
        },
      ],
    },
    {
      id: 2,
      title: "Solutions",
      children: [
        {
          id: 8,
          title: "Customer Support",
          path: "/customer-support",
        },
      ],
    },
    {
      id: 9,
      title: "Resources",
      children: [
        {
          id: 10,
          title: "Help Center",
          path: "/help-center",
        },
        {
          id: 11,
          title: "Press",
          path: "/press",
        },
        {
          id: 12,
          title: "Blog",
          path: "/blog",
        },
      ],
    },
    {
      id: 3,
      title: "Text Company",
      children: [
        {
          id: 13,
          title: "About Text",
          path: "/about-text",
        },
        {
          id: 14,
          title: "Careers",
          path: "/careers",
        },
        {
          id: 15,
          title: "Chat With Us",
          path: "/chat-with-us",
        },
        {
          id: 16,
          title: "Text Incubator",
          path: "/text-incubator",
        },
        {
          id: 17,
          title: "Legal",
          path: "/legal",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaTwitter />,
    },
    {
      id: 2,
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      icon: <FaFacebook />,
    },
    {
      id: 4,
      icon: <BsYoutube />,
    },
    {
      id: 5,
      icon: <BsInstagram />,
    },
    {
      id: 6,
      icon: <FaProductHunt />,
    },
    {
      id: 7,
      icon: <FaDribbble />,
    },
    {
      id: 8,
      icon: <FaGithub />,
    },
  ]
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-wrap gap-12  py-[64px]">
        <div className="flex flex-col gap-4 mr-12">
          <img
            src="https://www.knowledgebase.com/images/logo-dark-mode.svg"
            className="h-[41px]"
          />
          <p>Guide and educate customers</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-16 w-full">
          {footerLinks.map((section) => (
            <div key={section.id}>
              <ul className="text-[14px]">
                <li className="font-bold mb-[14px] ">{section.title}</li>
                {section.children.map((link) => {
                  return (
                    <li key={link.id} className="font-light hover:underline">
                      {link.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between font-medium pb-[64px]">
        <div className="flex items-center flex-wrap gap-8 font-bold">
          <p className="text-[16px] !m-0 ">Start your free trial</p>
          <Button buttonClassName={"text-white bg-[#EE0001] px-[16px] py-[8px] rounded-sm text-[18px] hover:bg-[#d40000]"}>Sign up free</Button>
        </div>
        <div className="flex flex-wrap gap-8 text-[24px]">
         {socialLinks.map((link)=>{
           return <span key={link.id} className="hover:text-[#dbd9d9]">{link.icon}</span>
         })} 
        </div>
      </div>
    </div>
  );
}
export default MainSectionFooter;
