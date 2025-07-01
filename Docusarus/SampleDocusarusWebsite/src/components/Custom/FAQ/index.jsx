import { FaPlus } from "react-icons/fa6";

function FAQ() {
  const handleFAQClick = (e) => {
    console.log("FAQ question clicked");
    console.log(e.target.className);
  };
  return (
    <div className="my-10">
      <h1 className="text-center">Frequently Asked Questions</h1>
      <div>
        <div className="bg-gray-200 rounded-2xl">
          <button
            className="w-full flex justify-between items-center p-6 text-2xl"
            onClick={handleFAQClick}
          >
            <span className="text-xl font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <FaPlus />
          </button>
          <p className="px-6 pt-2 pb-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-gray-200 rounded-2xl">
          <button
            className="w-full flex justify-between items-center p-6 text-2xl"
            onClick={handleFAQClick}
          >
            <span className="text-xl font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <FaPlus />
          </button>
          <p className="px-6 pt-2 pb-6 text-gray-600 hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-gray-200 rounded-2xl">
          <button
            className="w-full flex justify-between items-center p-6 text-2xl"
            onClick={handleFAQClick}
          >
            <span className="text-xl font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <FaPlus />
          </button>
          <p className="px-6 pt-2 pb-6 text-gray-600 hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.
          </p>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
