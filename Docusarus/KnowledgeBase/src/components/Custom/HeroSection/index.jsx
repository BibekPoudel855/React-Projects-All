import Button from "./../Button/index";
function HeroSection() {
  return (
    <div className="flex justify-center w-[100%] bg-[#1B1B20] py-[64px] pb-[58px] overflow-hidden">
      <div className="flex flex-col justify-center items-center w-[90%] lg:w-[65%] text-center relative">
        <img
          src="https://www.knowledgebase.com/hero-illustration-left.png"
          alt=""
          className="hidden lg:block absolute lg:left-[-600px] lg:top-[-150px] lg:h-[105%] xl:left-[-550px] xl:top-[-150px] xl:h-[130%]"
        />
        <img
          src="https://www.knowledgebase.com/hero-illustration-right.png"
          alt=""
          className="hidden lg:block absolute lg:right-[-600px] lg:top-[-150px] lg:h-[100%] xl:right-[-780px] xl:top-[-180px] xl:h-[160%]"
        />
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-[30px]">
          AI-powered knowledge base at your customers' service
        </p>
        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal text-white text-center mb-[25px] w-[90%] lg:w-[60%]">
          Knowledge base software for lightning-fast customer support and
          effortless self-service.
        </p>
        <Button
          buttonClassName={
            "text-2xl bg-[#EE0007] text-white px-[32px] py-[16px] rounded hover:bg-[#d40000] font-semibold mb-[12px]"
          }
        >
          Sign up free
        </Button>
        <img
          src="https://www.knowledgebase.com/customers_hu90f4b8b1dde2a54840f5b4ea12034cd9_13029_1280x0_resize_lanczos_3.png"
          alt=""
          className="mt-[48px]"
        />
      </div>
    </div>
  );
}
export default HeroSection;
