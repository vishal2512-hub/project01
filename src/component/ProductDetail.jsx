import Skeleton from "./Skeleton";
import {useParams} from 'react-router-dom'
import UseGetSingle from "../component/useGetSingle";

const ProductDetail = () =>  {
  const {productid} = useParams();
  const singleProduct = UseGetSingle(productid);
  UseGetSingle(productid); 
  
  if (singleProduct === null) {
    return <Skeleton/>
  }
  
  const {title,price,description,image,rating} =singleProduct;
  
  return singleProduct === null ? <Skeleton/> : (
    <div  className="m-3 ">
        <img src={image} alt="" className="h-72 w-72" />
        <h1>{title}</h1>
        <p>Rate {rating.rate}</p>
        <p>Price : {price}</p>
        <p> desc :{description}</p>
         Product detail page
      </div>
  );
}


export default ProductDetail;
