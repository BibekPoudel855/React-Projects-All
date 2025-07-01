import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/FirebaseContext";

function ItemCard({ book, bookId }) {
  const navigator = useNavigate();
  const { addToCart } = useFirebase();

  const handleAddToCart = (e) => {
    console.log("add item to cart", book);
    addToCart(book);
  };

  const handleGetMoreDetail = (e) => {
    console.log(book, bookId);
    navigator(`/book/${bookId}`);
  };
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[300px] mx-auto text-[#222]">
      {/* Book Image */}
      <img
        src={book.imageUrl}
        alt={book.name}
        className="w-full h-48 object-cover"
      />

      {/* Book Details */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">{book.name}</h2>
        <p className="text-sm text-gray-600 mb-1">ISBN: {book.isbn}</p>
        <p className="text-lg font-semibold text-[#1DCD9F]">
          Price: ${book.price}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 p-4">
        <img
          src={
            book.profileURL
              ? book.profileURL
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U2akySBgSHUK-foX-9SGFmLk6zEuGYNNqw&s"
          }
          alt={book.displayName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-sm">
          <p className="font-semibold">{book.displayName}</p>
          <p className="text-gray-500">{book.email}</p>
        </div>
      </div>
      <div className="flex flex-wrap py-2 border-t border-gray-200">
        <button
          className="bg-[#1DCD9F] text-white py-2 px-4 rounded mb-4 mx-4 transition hover:bg-[#169976]"
          onClick={handleGetMoreDetail}
        >
          Get More Detail
        </button>
        <button
          className="bg-[#1DCD9F] text-white py-2 px-4 rounded mb-4 mx-4 transition hover:bg-[#169976]"
          onClick={handleAddToCart}
        >
          Cart
        </button>
      </div>

    </div>
  );
}

export default ItemCard;
