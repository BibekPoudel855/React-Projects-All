function FeedBackCard() {
  const customerFeedback = [
    {
      id: 1,
      customerName: "Nabila Gardner",
      customerAddress: "from LivingWell",
      comment:
        "What we value a lot about KnowledgeBase is the ability to customize its look so that it stays consistent with our design. Adding our logo, custom domain, and a favicon makes it feel like an integral part of our website.",
      image:
        "https://www.knowledgebase.com/living-well_hubd368d1d191289ef699f07ed20e0e062_7335_360x0_resize_lanczos_3.png",
    imgStyle: "h-[35px]"
    },
    {
      id: 2,
      customerName: "David Lin",
      customerAddress: "from PearlMountain",
      comment:
        "Our customers want to learn more about video making techniques. With KnowledgeBase, they can browse our resources at their own pace and solve their problems without contacting our customer support.",
      image:
        "https://www.knowledgebase.com/pearl-mountain_hu7aa01fb23a127d34da52d70defb47a7f_3671_360x0_resize_lanczos_3.png",
      imgStyle: "h-[60px]"
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center w-full gap-10 justify-center relative z-10 py-[100px]">
      {customerFeedback.map((feedback) => {
        return (
          <div className="bg-white w-[90%] sm:w-[550px] sm:h-[465px] p-[4rem] px-[4rem] rounded-xl" key={feedback.id}>
            <p className="text-[23px] leading-[1.5] sm:w-[416px] sm:min-h-[265px]">{`"${feedback.comment}"`}</p>
            <div className="flex items-center gap-5 leading-6">
              <img src={feedback.image} alt="" className={`${feedback.imgStyle} `} />
              <div>
                <p className="!m-0 font-semibold text-wrap">{feedback.customerName}</p>
                <p className="!m-0">{feedback.customerAddress}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default FeedBackCard;
