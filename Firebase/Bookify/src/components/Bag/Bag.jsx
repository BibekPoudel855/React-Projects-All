import BagFinalDetails from "./BagFinalPriceDetails";
import BagItems from "./BagItems";
function Bag() {
  return (
    <main className="w-[90vw] mx-auto flex flex-col items-center lg:flex-row justify-between ">
      <BagItems />
      <BagFinalDetails />
    </main>
  );
}
export default Bag;
