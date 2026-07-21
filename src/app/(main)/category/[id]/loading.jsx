import React from 'react';

const Loading = () => {
    return (
         <div className='flex h-[85vh] justify-center items-center gap-4'>
            News by Category loading
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default Loading;