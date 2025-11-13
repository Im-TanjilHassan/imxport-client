import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
      <div className="flex justify-center items-center">
        <Oval
          visible={true}
          height="30"
          width="30"
          color="#11645d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
};

export default Loader;