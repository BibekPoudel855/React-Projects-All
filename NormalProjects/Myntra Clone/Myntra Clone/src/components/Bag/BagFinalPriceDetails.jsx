import { useSelector } from "react-redux";

function BagFinalPriceDetails() {
  const bagItems = useSelector((state) => {
    return state.bag;
  });
  const allItems = useSelector((state) => {
    return state.items;
  });
  const finalItems = allItems.filter((item) => {
    if (bagItems.includes(item.id)) {
      return item;
    }
  });
  const bagDetails = {
    totalItem: bagItems.length,
    totalMRP: 0,
    totalDiscount: 0,
  };
  finalItems.forEach((item) => {
    bagDetails.totalMRP += item.current_price;
    bagDetails.totalDiscount +=
      (item.discount_percentage * item.current_price) / 100;
  });
  return (
    <div className="w-[90vw] lg:w-[35vw] py-10 lg:p-10">
      <div className="flex flex-col gap-1 font-normal text-gray-800 text-[14px]">
        <div className="flex justify-between items-center text-gray-600 font-bold">
          <span>PRICE DETAILS</span>
          <span>({bagDetails.totalItem} Items) </span>
        </div>
        <div className="flex justify-between items-center price-item">
          <span className="price-item-tag">Total MRP </span>
          <span className="price-item-value">₹{bagDetails.totalMRP}</span>
        </div>
        <div className="flex justify-between items-center price-item">
          <span className="price-item-tag">Discount on MRP </span>
          <span className="text-green-600">-₹{bagDetails.totalDiscount}</span>
        </div>
        <div className="flex justify-between items-center price-item">
          <span className="price-item-tag">Convenience Fee </span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="w-[100%] flex justify-between items-center font-bold text-[16px]">
          <span className="price-item-tag">Total Amount </span>
          <span>₹{bagDetails.totalMRP - bagDetails.totalDiscount + 99}</span>
        </div>
      </div>
      <button
        className="bg-[#FF3F6C] text-white font-bold text-[16px] rounded-md px-4 py-2 mt-4 flex items-center justify-center hover:bg-[#FF3E8C] transition-colors"
        onClick={() => {
          console.log(finalItems);
          if (finalItems.length === 0) {
            alert("Your bag is empty!");
          } else {
            alert("Order Placed Successfully!");
          }
        }}
      >
        <div>PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagFinalPriceDetails;
