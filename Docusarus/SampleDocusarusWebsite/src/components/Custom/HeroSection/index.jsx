import Button from "../Button";
import heroImahge from "./../../../../static/img/hero_image.png";
function HeroSection() {
  return (
    <div className="bg-gray-200 rounded-3xl rounded-br-[300px] py-8 px-4 my-8 flex justify-between items-center shadow-lg">
      <div className="w-[50%] h-[500px] flex flex-col justify-center items-start gap-5">
        <h1 className="text-6xl font-extrabold text-gray-900">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-2xl text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at
          beatae quae est aut rerum.
        </p>
        <div className="flex justify-start">
          <Button buttonClassName="bg-black text-white text-lg rounded px-4 py-2 hover:bg-gray-700 mr-6">
          Get Started
        </Button>
        <Button buttonClassName="border border-black text-black text-lg rounded px-4 py-2 hover:bg-gray-400">
          Learn More
        </Button>
        </div>
      </div>
      <div>
        <img src={heroImahge} alt="no found" className="h-[500]" />
      </div>
    </div>
  );
}
export default HeroSection;
