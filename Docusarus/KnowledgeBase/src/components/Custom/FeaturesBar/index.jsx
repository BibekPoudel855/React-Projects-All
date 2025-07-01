import { SiHelpdesk } from "react-icons/si";
import { SiChatbot } from "react-icons/si";
import { SiLivechat } from "react-icons/si";

function FeaturesBar() {

  const features = [
    {
      id: 1,
      name: "LiveChat",
      description: "Connect with customers",
      icon: <SiLivechat />,
    },
    {
      id: 2,
      name: "ChatBot",
      description: "Automate customer service with AI",
      icon: <SiChatbot />,
    },
    {
      id: 3,
      name: "HelpDesk",
      description: "Support customers with tickets",
      icon: <SiHelpdesk />,
    },
  ];
  
  return (
    <div className="hidden h-[42px] bg-[#1B1B20] text-[#767581] text-[12px] lg:flex lg:justify-evenly xl:justify-between items-center lg:px-[20px] xl:px-[13vw]">
      <p className="flex items-center m-0" style={{ margin: "0px" }}>
        Discover <span className="font-bold">Text</span> products
      </p>
      {features.map((feature) => {
        return (
          <p className="flex items-center" key={feature.id} style={{ margin: "0px" }}>
            <span className="text-[12px] font-bold flex items-center gap-1">
              {feature.icon} {feature.name}
            </span>{" "}
            <span className="mx-1">-</span> {feature.description}
          </p>
        );
      })}
    </div>
  );
}

export default FeaturesBar;
