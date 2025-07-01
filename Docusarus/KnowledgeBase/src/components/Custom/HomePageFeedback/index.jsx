import FeedBackCard from "./FeedBackCard";

function FeedbackCustomer() {
  const curvedImage = (
    <svg
      width="1440"
      height="36"
      viewBox="0 0 1440 36"
      className="u-block"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      preserveAspectRatio="none"
    >
      <rect width="100%" height="100%" fill="#fff"></rect>
      <path
        d="M1440 36V8.2s-105.6-1.2-160.7-6a877 877 0 00-150.5 2.5c-42.1 3.9-140 15-223 15C754 19.6 700.3 6.8 548.8 7c-143.7 0-273.4 11.5-350 12.6-76.6 1.2-198.8 0-198.8 0V36h1440z"
        fill="#1b1b20"
      ></path>
    </svg>
  );
  return (
    <div className="bg-[#1B1B20] relative overflow-hidden mt-10">
      {curvedImage}
      <div className="flex items-center h-full">
        <FeedBackCard />
      </div>
      <img src="https://www.knowledgebase.com/dust-7.0a7e65aca6a180d1d7998893ff7f6dfba852e48b0be410483b49552fd10a4a75.svg" alt="" className=" hidden lg:block absolute top-14 left-18" />
      <img src="https://www.knowledgebase.com/dust-9.64abc8370fd044f7984170e7cf134954a1d01710d9727e5a322407971f95b517.svg" alt="" className=" hidden lg:block absolute bottom-[-100px] left-[-100px] z-1" />
      <img src="https://www.knowledgebase.com/dust-10.1cca262d904d766f5c7db204756107ed0c9a82f1774a4d8949fa309a5992989e.svg" alt="" className=" hidden lg:block absolute bottom-[-40px] right-[-40px] z-1" />
    </div>
  );
}
export default FeedbackCustomer;
