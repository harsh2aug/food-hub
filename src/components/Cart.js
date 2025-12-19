import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, clearCart, removeItem } from "../store/cartSlice";
import Summary from "./Summary";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-3xl font-extrabold text-slate-700 dark:text-slate-200">
          Your cart is empty 🛒
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Add some delicious items to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">
          Your Cart
        </h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ul className="space-y-6 lg:col-span-2">
          {items.map((item) => {
            const { id, name, description, imageId, price, defaultPrice } =
              item.info;

            const finalPrice = (price || defaultPrice || 0) / 100;

            return (
              <li
                key={id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow hover:shadow-lg dark:hover:shadow-xl transition p-5"
              >
                <div className="flex gap-6">
                  {imageId && (
                    <img
                      src={CDN_URL + imageId}
                      alt={name}
                      className="w-28 h-28 rounded-xl object-cover shadow"
                    />
                  )}

                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                      {name}
                    </h4>

                    {description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {description}
                      </p>
                    )}

                    <div className="flex justify-between items-center mt-4">
                      <p className="text-amber-700 dark:text-amber-400 font-bold text-lg">
                        ₹ {finalPrice.toFixed(2)}
                      </p>

                      <div className="flex items-center gap-3 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1">
                        <button
                          onClick={() => dispatch(removeItem(item.info))}
                          className="text-xl font-bold text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
                        >
                          −
                        </button>

                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => dispatch(addItem(item.info))}
                          className="text-xl font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <Summary />
      </div>
    </div>
  );
};

export default Cart;
