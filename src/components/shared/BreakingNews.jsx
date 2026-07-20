import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: Government Announces New Economic Policy",
  },
  {
    _id: "3",
    title: "Breaking News: Scientists Make Significant Renewable Energy Breakthrough",
  },
];
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 p-2 rounded-sm container mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={50} >
                {
                    news.map(n => {
                        return <span key={n._id} className='px-5'>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;