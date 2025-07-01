import Button from "./../Button/index.jsx";
function Pricing() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <h1>Plans & Pricing</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="flex justify-between my-10">
        <div className="h-[450px] w-[25%] rounded-2xl bg-gray-200 flex flex-col items-center justify-center gap-4 px-8">
            <h1>Basic</h1>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            <span className="text-gray-500"><span className="text-[24px] font-semibold text-black">$2.99</span>/<span className="text-xs">Month</span></span>
            <div className="text-left w-full">
                <li>Free video</li>
                <li>Free audio</li>
                <li>Free image</li>
                <li>Free text</li>
                <li>Free AI</li>
            </div>
            <Button buttonClassName="bg-black text-white py-2 px-4 rounded">Get Started</Button>
        </div>
                <div className="h-[450px] w-[25%] rounded-2xl bg-gray-200 flex flex-col items-center justify-center gap-4 px-8">
            <h1>Basic</h1>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            <span className="text-gray-500"><span className="text-[24px] font-semibold text-black">$2.99</span>/<span className="text-xs">Month</span></span>
            <div className="text-left w-full">
                <li>Free video</li>
                <li>Free audio</li>
                <li>Free image</li>
                <li>Free text</li>
                <li>Free AI</li>
            </div>
            <Button buttonClassName="bg-black text-white py-2 px-4 rounded">Get Started</Button>
        </div>
                <div className="h-[450px] w-[25%] rounded-2xl bg-gray-200 flex flex-col items-center justify-center gap-4 px-8">
            <h1>Basic</h1>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            <span className="text-gray-500"><span className="text-[24px] font-semibold text-black">$2.99</span>/<span className="text-xs">Month</span></span>
            <div className="text-left w-full">
                <li>Free video</li>
                <li>Free audio</li>
                <li>Free image</li>
                <li>Free text</li>
                <li>Free AI</li>
            </div>
            <Button buttonClassName="bg-black text-white py-2 px-4 rounded">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
