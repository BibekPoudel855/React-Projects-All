import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function HomeMainBody() {
  const items = useSelector((state) => {
    return state.items;
  });

  return (
    <div className="flex justify-center gap-10 flex-wrap w-[90vw] mx-auto py-10">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default HomeMainBody;
