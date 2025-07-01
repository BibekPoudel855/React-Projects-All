import { useSelector } from "react-redux";
import BagItemCard from "./BagItemCard";

function BagItems() {
  const bagItems = useSelector((store) => {
    return store.bag;
  });
  const allItems = useSelector((store) => {
    return store.items;
  });

  const finalItems = allItems.filter((item) => {
    if(bagItems.includes(item.id)) {
      return item;
    }
  });
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
