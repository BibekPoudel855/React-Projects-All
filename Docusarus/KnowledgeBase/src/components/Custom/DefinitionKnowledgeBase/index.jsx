function DefinitionKnowledgeBase() {
  const definition = [
    {
      id: 1,
      mainHeading: "What’s a knowledge base?",
      subText:
        "Knowledge base software helps you manage and share your team’s internal knowledge, and build a public help center for your customers.",
      mainDescription:
        "On the one hand, a knowledge base gives your customers a hosted help center so they can find answers on their own before starting a chat or when your support team isn't around. On the other hand, it gives your support team a helping hand anytime they need to answer questions they don’t know the answer to on the spot.",
    },
  ];
  return (
    <div className="flex flex-col-reverse lg:flex-row flex-wrap-reverse justify-evenly items-center w-[85vw] !mx-auto pb-16  lg:py-25">
      <div className="w-[90%] lg:w-[450px] ">
        <img
          src="https://www.knowledgebase.com/marcos_hub0bf687cc571efb9771dd4e32cc0ee45_263629_888x0_resize_lanczos_3.png"
          alt=""
        />
      </div>
      <div className="text-[#1B1B20] w-[90%] lg:w-[550px] leading-[1.5]">
        {definition.map((item)=>{
          return <div key={item.id} className="">
            <p className="text-[55px] font-bold leading-[1] !mb-0 !mt-15">{item.mainHeading}</p>
            <p className="text-[24px] font-bold !m-0 !mt-5 ">{item.subText}</p>
            <p className="text-[18px] !m-0 !mt-5 font-light">{item.mainDescription}</p>
          </div>
        })}
      </div>
    </div>
  );
}
export default DefinitionKnowledgeBase;
