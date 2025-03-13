import { useParams } from "react-router-dom";
import productData from "../Data/productData";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext"; // Import cart context

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Get addToCart function
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-gray-500">Product not found</p>;
  }

  // Get last 5 products excluding the current product
  const lastFiveProducts = productData
    .filter((p) => p.id !== parseInt(id)) // Exclude current product
    .slice(-5); // Get last 5 products

  return (
    <div className="p-6 max-w-8xl mx-auto mt-25 shadow-md rounded-lg font-[sml]">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-around">
        <img src={product.image} alt={product.name} className="w-64 object-cover rounded-md" />
        <div className="mt-4 md:mt-0">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-500 mt-1">Category: {product.category}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaRegStar key={i} className={`text-yellow-400 ${i < product.rating ? "" : "opacity-30"}`} />
            ))}
          </div>
          <p className="text-red-500 font-bold text-2xl mt-2">${product.discountedPrice}</p>
          <p className="text-gray-400 text-sm line-through">${product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Last 5 Products */}
      <h3 className="text-lg font-bold mt-8 mb-4">Related Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {lastFiveProducts.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md" />
              <h4 className="mt-2 text-sm font-semibold">{item.name}</h4>
              <p className="text-red-500 font-bold">${item.discountedPrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
