import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[85vh] justify-center items-center'>
            Global loading
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default LoadingPage;