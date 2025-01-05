import React from 'react';
import Listitem from './Listitem';

function Accordian({ title, Open, setopen }) {
  const openitem = () => {
    setopen();
  }

  return (
    <div className='mt-5 shadow-md border p-2 bg-gray-50 w-64'>
      <div className='flex justify-between'>
        <h1>{title}</h1>
        <button onClick={openitem}
          className='bg-black text-white px-2 rounded-sm'>
          {Open ? '-' : '+'}
        </button>
      </div>
      {Open && <Listitem />}
    </div>
  );
}

export default Accordian;
