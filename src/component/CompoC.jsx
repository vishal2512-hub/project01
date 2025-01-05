import React, { useContext } from 'react';
import UserContext from './Context/Usercontext';

const CompoC = () => {
  const user = useContext(UserContext);
  console.log(user);
  
  return (
    <div className="border border-black">
      <h1>User Profile</h1>
      <p>Name : {user.name}</p>
      <p>Email : {user.Email}</p>
      
    </div>
  );
}

export default CompoC;
   