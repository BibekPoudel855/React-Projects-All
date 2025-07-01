import Button from "../Button";

function HomePageVideoSecond() {
  return (
    <div className="w-[100vw] lg:w-[99vw] flex justify-center items-center py-14 lg:py-0 lg:mt-[80px] ">
      <div className="py-16 w-[90%] lg:w-[70%] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <video
          autoPlay
          loop
          muted
          className="rounded-2xl w-full lg:w-[410px] lg:h-[270px]"
          src="https://www.knowledgebase.com/quick-answer.5e0b7f58360bce87574a833f10723b07b1fedc8d692442350716683080e43d31.mp4"
        />
        <div className="w-full lg:w-[50%] text-[#1B1B20]">
          <p className="text-[55px] font-bold leading-14 lg:w-[70%]">AI search = faster answers</p>
          <p className="text-[25px] ">
            <span className="font-semibold">QuickAnswer</span> provides your customers with <span className="font-semibold">tailored and immediate </span>
            answers to a query without the need to scroll an article
          </p>
          <Button
            buttonClassName={
              "text-[18px] px-[24px] py-[12px] bg-[#0066FF] rounded text-white font-semibold hover:bg-[#0052cc]"
            }
          >
            Help your customer faster
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePageVideoSecond;
