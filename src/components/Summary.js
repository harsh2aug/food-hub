import { useSelector } from "react-redux";

const Summary = () => {
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce((acc, item) => {
    const price = item.info.price || item.info.defaultPrice || 0;
    return acc + item.quantity * (price / 100);
  }, 0);

  const deliveryFee = subtotal > 0 ? 40 : 0;
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + deliveryFee + tax;

  return (
    <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 shadow p-6 h-fit">
      <h3 className="text-xl font-bold text-slate-800 mb-5">Bill Details</h3>

      <div className="space-y-4 text-sm">
        {items.map((item) => {
          const { name, price, defaultPrice } = item.info;
          const unitPrice = (price || defaultPrice || 0) / 100;
          const total = unitPrice * item.quantity;

          return (
            <div
              key={item.id}
              className="flex justify-between items-start gap-4"
            >
              <div className="flex-1">
                <p className="text-slate-700 font-medium leading-snug">
                  {name}
                </p>
                <p className="text-xs text-slate-500">
                  {item.quantity} × ₹{unitPrice.toFixed(2)}
                </p>
              </div>

              <p className="font-semibold text-slate-700">
                ₹{total.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>

      <hr className="my-4" />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-600">Item Total</span>
          <span className="font-medium">₹ {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Delivery Fee</span>
          <span className="font-medium">₹ {deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Taxes & Charges</span>
          <span className="font-medium">₹ {tax.toFixed(2)}</span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-extrabold">
        <span>To Pay</span>
        <span className="text-amber-700">₹ {grandTotal.toFixed(2)}</span>
      </div>

      <button
        className="
          mt-6 w-full
          bg-amber-500
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-amber-600
          transition
          shadow
        "
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Summary;
