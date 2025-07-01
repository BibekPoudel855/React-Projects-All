import ItemCard from "./ItemsCard";
import { useFirebase } from "./../../context/FirebaseContext";
import React, { useState } from "react";
function Items() {
  const { getFirestoreBookData } = useFirebase();
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    getFirestoreBookData().then((data) => {
      setItems(data.docs); 
    });
  }, []);
  return (
    <div className="w-[90vw] mx-auto py-10 flex flex-wrap gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} bookId={item.id} book={item.data()} />
      ))}
    </div>
  );
}
export default Items;
