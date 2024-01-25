import React from 'react';
import { CirclesWithBar } from "react-loader-spinner";
import './Loader.css'

const Loader = () => {
  return (
    <>
      <div className='loader-bg'></div>
        <div className='loader'>
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
    </>
  );
};

export default Loader;