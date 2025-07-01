import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromBag } from "../../store/bagSlice";

function BagItemCard({ item }) {
  const dispatch = useDispatch();
  const handleRemoveFromBag = (id) => {
    dispatch(removeFromBag(id));
  };
  return (
    <div className="flex justify-between w-[90vw] lg:w-[100%] shadow my-8">
      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        <div className="item-left-part ">
          <img className="h-[140px] rounded" src={`../${item.image}`} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-bold">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="flex gap-4">
            <span className="font-bold">Rs {item.current_price} </span>
            <span className="line-through">Rs ${item.original_price}</span>
            <span className="text-green-500">
              (${item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="font-bold">{item.return_period} days</span> return
            available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="text-green-500"> {item.delivery_date}</span>
          </div>
        </div>
      </div>
      <div className="text-[20px] transition hover:text-[#FF3F6C] cursor-pointer" onClick={()=>{
        handleRemoveFromBag(item.id);
        
      }}>
        <RiDeleteBin7Line />
      </div>
    </div>
  );
}
export default BagItemCard;
