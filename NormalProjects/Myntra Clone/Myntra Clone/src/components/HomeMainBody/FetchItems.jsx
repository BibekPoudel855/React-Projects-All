import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems } from "./../../store/itemsSlice";
import { setFetched, setFetching } from "./../../store/fetchStatusSlice";

function FetchItems() {
  const fetchStatus = useSelector((state) => {
    return state.fetchStatus;
  });
  
  const dispatch = useDispatch();
  const fetchItems = async () => {
    const response = await fetch("http://localhost:8080/items");
    const items = await response.json();
    dispatch(setFetching(true));
    dispatch(addInitialItems(items.items[0]));
    dispatch(setFetched(true));
    dispatch(setFetching(false));
  };
  useEffect(() => {
    if (fetchStatus.fetched) {
      return;
    }

    fetchItems();
  }, []);
  return <></>;
}
export default FetchItems;
