import featuresImage from "./../../../../static/img/featureImage.png";
import featuresImage2 from "./../../../../static/img/featureImage2.png";
import featuresImage3 from "./../../../../static/img/featureImage3.png"
function Features() {
  return (
    <div className="my-20">
      <h1 className="text-center pb-4">Features</h1>
      <div className="w-full flex justify-between flex-wrap">
        <div className="bg-gray-200 w-[20%] rounded-2xl flex flex-col items-center px-4">
          <div className="flex flex-col justify-center items-center">
            <img src={featuresImage} alt="image not found" className="h-44" />
            <h3>Lorem ipsum</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 w-[20%] rounded-2xl flex flex-col items-center px-4">
          <div className="flex flex-col justify-center items-center">
            <img src={featuresImage3} alt="image not found" className="h-44 object-cover" />
            <h3>Lorem ipsum</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 w-[20%] rounded-2xl flex flex-col items-center px-4">
          <div className="flex flex-col justify-center items-center">
            <img src={featuresImage2} alt="image not found" className="h-44 object-cover" />
            <h3>Lorem ipsum</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 w-[20%] rounded-2xl flex flex-col items-center px-4">
          <div className="flex flex-col justify-center items-center">
            <img src={featuresImage} alt="image not found" className="h-44" />
            <h3>Lorem ipsum</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
