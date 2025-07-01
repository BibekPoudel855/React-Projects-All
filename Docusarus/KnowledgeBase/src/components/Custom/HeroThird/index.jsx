import Button from "../Button";
function HeroThird() {
  return (
    <div className="flex justify-center lg:justify-end items-center w-[100%] pt-7 pb-14 lg:py-0 ">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:w-[77%] lg:mr-[90px]">
        <div className="w-[90%] lg:w-[40%]">
          <p className="text-[55px] font-bold leading-14">
            One tool, many knowledge bases
          </p>
          <p className="text-[25px]">
            Scale your customer support and manage different knowledge bases in
            one, easy-to-use dashboard.
          </p>
          <Button
            buttonClassName={
              "text-[18px] px-[24px] py-[12px] bg-[#0066FF] rounded text-white font-semibold hover:bg-[#0052cc]"
            }
          >
            Try multiple knowledge bases
          </Button>
        </div>
        <div>
          <img
            src="https://www.knowledgebase.com/hero-pic-workspaces_hu533266b6f8903728d52c89e2feef6286_89971_1532x0_resize_lanczos_3.png"
            alt=""
            className="w-full max-h-[550px] object-fit p-[10px] lg:p-[0px]"
          />
        </div>
      </div>
    </div>
  );
}
export default HeroThird;
