import Productlist from '../../Productlist'
import Product from "../Product/Product";

const ProductCard = () => {
    return (
      <div className="ProductCard">
        {Productlist.map((product)  => {
          // eslint-disable-next-line react/jsx-key
          return <Product product={product} />;
        })}
      </div>
    );
  };

export default ProductCard;
  