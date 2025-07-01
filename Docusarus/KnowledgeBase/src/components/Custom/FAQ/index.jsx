import FAQHeading from "./Heading";
import FAQBody from "./Body";
function FAQ() {
  return (
    <div className="bg-[#f6f6f7] ">
      <svg
        width="1440"
        height="36"
        viewBox="0 0 1440 36"
        className="u-block"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
        preserveAspectRatio="none"
      >
        <rect width="100%" height="100%" fill="#fff" />
        <path
          d="M1440 36V8.2s-105.6-1.2-160.7-6a877 877 0 00-150.5 2.5c-42.1 3.9-140 15-223 15C754 19.6 700.3 6.8 548.8 7c-143.7 0-273.4 11.5-350 12.6-76.6 1.2-198.8 0-198.8 0V36h1440z"
          fill="#f6f6f7"
        />
      </svg>

      <div className="py-[95px] w-[90%] lg:w-[75vw] !mx-auto">
        <FAQHeading />
        <FAQBody />
      </div>
    </div>
  );
}
export default FAQ;
