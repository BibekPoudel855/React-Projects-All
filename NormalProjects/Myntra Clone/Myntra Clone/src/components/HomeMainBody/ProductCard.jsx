import { BsHandbag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "./../../store/bagSlice";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useState } from "react";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => {    
    return store.bag;

  });

  const [isItemInBag, setIsItemInBag] = useState(bagItems.includes(item.id));
  
  const handleAddToBag = () => {
    dispatch(addToBag(item.id));
    setIsItemInBag(!isItemInBag);
    alert("Item added to bag successfully!");
  };
  const handleRemoveFromBag = () => {
    dispatch(removeFromBag(item.id));
    if(bagItems.includes(item.id)){
      setIsItemInBag(!isItemInBag);
    }
    alert("Item removed from bag successfully!");
  };
  return (
    <div className="flex flex-col items-start gap-2 w-[350px] transition shadow-md hover:shadow-lg p-5">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="font-bold">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="font-bold">{item.item_name}</div>
      <div className="price flex items-center gap-3">
        <span className="font-bold">Rs {item.current_price}</span>
        <span className="line-through font-extralight">
          Rs {item.original_price}
        </span>
        <span className="text-orange-500">
          ({item.discount_percentage}% OFF)
        </span>
      </div>

      {isItemInBag ? (
        <button
          className="flex items-center gap-2 text-1xl rounded bg-[#FF3E6C] text-white font-bold px-4 py-2 hover:bg-[#FF3E8C] transition-all duration-300"
          onClick={handleRemoveFromBag}>
          <RiDeleteBin7Line /> Remove from Bag
        </button>
      ) : (
        <button
          className="flex items-center gap-2 text-1xl rounded bg-[#FF3E6C] text-white font-bold px-4 py-2 hover:bg-[#FF3E8C] transition-all duration-300"
          onClick={handleAddToBag}>
          <BsHandbag /> Add to Bag
        </button>
      )}
    </div>
  );
}
export default ProductCard;
