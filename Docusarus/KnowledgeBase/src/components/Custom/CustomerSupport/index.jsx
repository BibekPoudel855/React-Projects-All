import Button from "../Button";
import { TiTick } from "react-icons/ti";
function CustomerSupport() {
  const signUpPoints = [
    "Up to 14 days of free trial",
    "No credit card required",
    "24/7  support",
  ];
  return (
    <div className="flex justify-center w-[100%] bg-[#ffd000] py-[100px]">
      <div className="flex flex-col items-center justify-center w-[90%] lg:w-[60%] relative ">
        <img
          src="https://www.knowledgebase.com/images/dust-prefooter-left.svg"
          alt=""
          className=" hidden lg:block absolute left-[-150px]"
        />
        <img
          src="https://www.knowledgebase.com/images/dust-prefooter-right.svg"
          alt=""
          className="hidden lg:block absolute right-[-150px]"
        />

        <p className="text-[55px] font-bold text-center leading-14">
          Help your customers and support teams at the same time
        </p>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-2 my-[24px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black text-[18px] p-[12px] w-[90%] lg:w-[350px] border-1 rounded-md font-normal"
          />
          <Button
            buttonClassName={
              "bg-[#EE0007] text-white text-[18px] py-[12px] px-[24px] rounded-md hover:bg-[#d40006] transition-all duration-300 ease-in-out"
            }
          >
            Sign up free
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-7 text-[18px] font-light">
          {signUpPoints.map((point, index) => {
            return (
              <span key={index} className="flex gap-1 items-center">
                <TiTick className="font-light" /> {point}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CustomerSupport;
