import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function FAQ({ question, answers }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col justify-center items-center text-[18px] m-h-[60px] w-[100%] lg:w-[564px] bg-white p-[16px] rounded-xl shadow hover:shadow-md  hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-in-out"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div className="flex justify-between items-center w-full">
        <p className={`!m-0 ${isOpen ? "font-bold" : ""}`}>{question}</p>
        {isOpen ? (
          <MdKeyboardArrowUp className="text-[28px] text-[#0066FF]" />
        ) : (
          <MdOutlineKeyboardArrowDown className="text-[28px] text-[#0066FF]" />
        )}
      </div>
      <div>
        {isOpen &&
          answers.map((answer) => (
            <p
              className="!m-0 pt-[16px] font-light text-[16px] whitespace-pre-wrap"
              key={answer.id}
            >
              {answer.text}
            </p>
          ))}
      </div>
    </div>
  );
}
export default FAQ;
