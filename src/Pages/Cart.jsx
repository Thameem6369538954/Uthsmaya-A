import { useCart } from "../Components/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto mt-30">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-red-500 font-bold">${item.discountedPrice} x {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}

          {/* Checkout Button */}
          <Link to="/checkout">
            <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
