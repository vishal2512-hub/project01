<<<<<<< HEAD
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
  
=======
import Product from "../Product/Product";
import { useContext, useEffect, useState } from "react";
import Skeleton from "../Skeleton";
import { HOF } from "../Product/Product";
import { Link } from "react-router-dom";
import UserContext from "../Context/Usercontext";

export const ProductCard = () => {
  const [listofProduct, setlistofProduct] = useState([]);
  const [searchstate, setsearchState] = useState("");

  const user = useContext(UserContext);
console.log(user);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    setlistofProduct(response);
  };

const HOFComponent = HOF(Product); // HOF is higher order component 
  return listofProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <>
        <div >
      <div className="mt-10 flex mx-5  space-x-2">
          <input

            className="border border-gray-600 px-2 py-2 "
            type="text"
            placeholder="Search products"
            onChange={(e) => user.setuserName(e.target.value)}
            value={user.name}

          />
          <button
            onClick={() => {
              const filterData = listofProduct.filter((product) => {
                return product.title.includes(searchstate);
              });
              setlistofProduct(filterData);
            }}
            className="bg-purple-600 px-6 py-2 text-[#f0f0f0f0]"
          >
            {" "}
            search{" "}
          </button>
      <button
        onClick={() => {
          const result = listofProduct.filter(
            (product) => product.rating.rate >= 4
          );
          setlistofProduct(result);
        }}
        className="bg-purple-600 px-6 py-2  text-[#f0f0f0f0]"
      >
        Top rated product
      </button>
        </div>
      </div>


      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-5 gap-4">
        {listofProduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              {
                product.rating.rate >= 4 ? <HOFComponent product={product}/> : <Product product={product}/>
              }
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default ProductCard;
>>>>>>> f40fda7 (Initial commit)
