import Lottie from 'lottie-react';
import React from 'react';
import Loader from "../../assets/lottie/loader.json"

const LoadingPage = () => {
    return (
        <div className='bg-base-100 flex justify-center items-center min-h-screen'>
            <Lottie animationData={Loader} style={{width: 300, height: 300}} />
        </div>
    );
};

export default LoadingPage;