import React from 'react';
import Page404 from "../../assets/lottie/page404.json";
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className='bg-base-200 flex justify-center items-center min-h-screen'>
            <Lottie animationData={Page404} style={{width: 400, height: 400}}  />
        </div>
    );
};

export default ErrorPage;