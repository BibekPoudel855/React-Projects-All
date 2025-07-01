
import BagItemCard from "./BagItemCard";

function BagItems() {
const finalItems = []
  return (
    <>
      <div className="max-h-[90vh] overflow-y-auto lg:w-[50%]">
        {finalItems.map((item) => {
          return <BagItemCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}
export default BagItems;
