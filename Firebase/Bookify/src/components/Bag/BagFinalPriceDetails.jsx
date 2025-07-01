
function BagFinalPriceDetails() {
  return (
    <div className="w-[90vw] lg:w-[35vw] py-10 lg:p-10">
      <div className="flex flex-col gap-1 font-normal text-gray-800 text-[14px]">
        <div className="flex justify-between items-center text-gray-600 font-bold">
          <span>PRICE DETAILS</span>
          <span>(12 Items) </span>
        </div>
        <div className="flex justify-between items-center price-item">
          <span className="price-item-tag">Total MRP </span>
          <span className="price-item-value">₹99</span>
        </div>
        <div className="flex justify-between items-center price-item">
          <span className="price-item-tag">Discount on MRP </span>
          <span className="text-green-600">-₹99</span>
        </div>
        <div className="flex justify-between items-center price-item">
          <span className="price-item-tag">Convenience Fee </span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="w-[100%] flex justify-between items-center font-bold text-[16px]">
          <span className="price-item-tag">Total Amount </span>
          <span>₹99</span>
        </div>
      </div>
      <button
        className="bg-[#1DCD9F] text-white font-bold text-[16px] rounded-md px-4 py-2 mt-4 flex items-center justify-center hover:bg-[#1DCD9F] transition-colors"
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
