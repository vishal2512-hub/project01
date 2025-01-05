<<<<<<< HEAD
/* eslint-disable react/prop-types */


const Product = ({ product }) => {
    const { image, title, price, rating } = product; // Destructure product info
    return (
      <div className="Product">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>Rating: {rating.rate}</p>
        <p>Price: ${price}</p>
      </div>
    );
  };

  export default Product;
=======
const Product = ({ product }) => {
  const { image, title, price, rating, id, color } = product; // Destructure product info
  return (
    <div className="flex flex-col items-center justify-center h-96 gap-4 border p-4 border-gray-600 hover:bg-gray-200 overflow-hidden">
      <img src={image} alt={title} className="w-32 h-40" />
      <h1>{title}</h1>
      <p>id:{id}</p>
      <p>Rating: {rating.rate}</p>
      <p>Price: ${price}</p>
      <p style={{ color: color || 'black' }}>color: {color}</p>
    </div>
  );
};

export default Product;

export const HOF = (product) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute -top-2 bg-black text-white px-4 py-1">Best Seller</span>
        <Product {...props} />
      </div>
    );
  };
};

>>>>>>> f40fda7 (Initial commit)
