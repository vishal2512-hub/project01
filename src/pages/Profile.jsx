import { useState } from "react";


const Profile = (props) => {


    // eslint-disable-next-line react/prop-types
    const {name , address , email} =props
    const [count ,setCount] = useState(0)
    const [count2 ,setCount2] = useState(0)



  return (
    <div>
      <h1>Functional Component</h1>
      <h1>Name :{name}</h1>
      <h1>Address : {address}</h1>
      <h1>Email : {email}</h1>
      <h1>Count :{count}</h1>
      <button onClick={()=> {
        setCount(count + 1)
      }}>increment</button>
    </div>
  );
};

export default Profile;
