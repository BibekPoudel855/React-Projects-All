function CopyrightFooter() {
  const copyrightTetxs = [
    {
      id: 1,

      text: "In case of any concern, ",
      subtext: "Contact Us",
    },
    {
      id: 2,
      text: "© 2025 www.bookify.com. All rights reserved.",
    },
    {
      id: 3,
      text: "bibek inc.",
    },
  ];
  return (
    <div className="flex flex-wrap gap-5 lg:gap-0 lg:justify-between w-full py-10 text-[#94969f]">
      {copyrightTetxs.map((item) => {
        return (
          <p key={item.id} className="">
            {item.text}{" "}
            {item.subtext ? (
              <span className="text-[#526CD0] font-bold">{item.subtext}</span>
            ) : null}
          </p>
        );
      })}
    </div>
  );
}
export default CopyrightFooter;
