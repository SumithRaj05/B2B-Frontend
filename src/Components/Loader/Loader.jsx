import React from 'react';
import { CirclesWithBar } from "react-loader-spinner";
import './Loader.css'

const Loader = () => {
  return (
    <>
        <div className='loader'>
          <CirclesWithBar
            height="100"
            width="100"
            color="#E7A12A"
            outerCircleColor="#E7A12A"
            innerCircleColor="#E7A12A"
            barColor="#E7A12A"
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