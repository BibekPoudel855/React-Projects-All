function HomePageVideoFirst() {
  return (
    <div
      className="bg-[#1B1B20] flex flex-col justify-center items-center relative h-[70vh] lg:h-[100vh] "
      style={{ overflowY: "visible" }}
    >
      <p className="text-[48px] font-bold text-white text-center ">
        Watch KnowledgeBase in action
      </p>
      <img
        src="https://www.knowledgebase.com/dust-1.074ca5bdaeb8b847c522ae943b285fcbe287464801824a004c0af82bc15c282f.svg"
        alt=""
        className="absolute left-[-150px] top-0 w-[300px] z-0 hidden lg:block"
      />

      <img
        src="https://www.knowledgebase.com/dust-2.93ba42f3530842edfcbb39ff097b6fbffa40fc0620b04efe324dbfc04a325b9f.svg"
        alt=""
         className="absolute bottom-0 right-[0px] w-[300px] z-0 hidden lg:block"
      />
      <div className="lg:bottom-[-30px] lg:relative flex justify-center items-center">
        <img
          src="https://embed-ssl.wistia.com/deliveries/99949316d06796cc0b1d18bf4f35bf60.webp?image_crop_resized=1280x720"
          alt="KnowledgeBase video"
          className="rounded-2xl w-[90%] lg:w-[1120px] z-10 shadow-xl"
        />
      </div>
    </div>
  );
}

export default HomePageVideoFirst;
