import { useEffect , useState} from 'react';

const UseGetSingle =(productid) => {
  const [single , setsingle] = useState(null);

    useEffect(() => {
      fetchData();
    },[])


    const fetchData = async() => {
      const response = await fetch(`https://fakestoreapi.com/products/${productid}`);
      const jsondata = await response.json();
      jsondata.color = jsondata.color || "Unknown"; // Add default color if not present
      setsingle(jsondata);
    }
    return single;
}

export default UseGetSingle;
