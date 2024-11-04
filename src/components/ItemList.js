import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, action }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItems = (item) => {
    dispatch(removeItem(item));
    // console.log(item);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-4/12  px-2  py-2">
            <div className="absolute">
              <button
                className="px-10 mx-7   bg-white shadow-lg text-xl font-extrabold  rounded-lg text-green-600"
                onClick={() => {
                  action === "Add"
                    ? handleAddItems(item)
                    : handleRemoveItems(item);
                }}
              >
                {action}
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
