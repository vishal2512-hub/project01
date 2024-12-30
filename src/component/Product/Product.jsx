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