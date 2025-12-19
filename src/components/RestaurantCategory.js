import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../store/cartSlice";

const RestaurantCategory = ({ data = [] }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <ul className="space-y-5">
      {data.map((category) => {
        const info = category?.card?.info;
        if (!info) return null;

        const { id, name, description, imageId, price, defaultPrice } = info;
        const finalPrice = (price || defaultPrice || 0) / 100;
        const quantity = getQuantity(id);

        return (
          <li
            key={id}
            className="
              bg-white dark:bg-slate-800
              rounded-xl
              border border-slate-200 dark:border-slate-700
              shadow-sm hover:shadow-md
              transition p-4
            "
          >
            <div className="flex justify-between gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-lg">
                  {name}
                </h4>

                {description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {description}
                  </p>
                )}

                <p className="text-amber-700 dark:text-amber-400 font-bold mt-2">
                  ₹ {finalPrice.toFixed(2)}
                </p>
              </div>

              {imageId && (
                <div className="relative flex flex-col items-center">
                  <img
                    src={CDN_URL + imageId}
                    alt={name}
                    className="w-24 h-24 rounded-lg object-cover shadow-md"
                  />

                  <div
                    className="
                      absolute -bottom-2
                      bg-white dark:bg-slate-700
                      border border-slate-300 dark:border-slate-600
                      rounded-lg shadow-md
                      flex items-center
                      px-2 py-1
                    "
                  >
                    {quantity === 0 ? (
                      <button
                        onClick={() => dispatch(addItem(info))}
                        className="
                          text-amber-700 dark:text-amber-400 font-semibold
                          px-4 py-1 text-sm
                          hover:text-white hover:bg-amber-700 dark:hover:bg-amber-600
                          rounded-md transition
                        "
                      >
                        ADD
                      </button>
                    ) : (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(removeItem(info))}
                          className="text-lg font-bold text-red-600 dark:text-red-500"
                        >
                          −
                        </button>

                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {quantity}
                        </span>

                        <button
                          onClick={() => dispatch(addItem(info))}
                          className="text-lg font-bold text-green-600 dark:text-green-400"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default RestaurantCategory;
