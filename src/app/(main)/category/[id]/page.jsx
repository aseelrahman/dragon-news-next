import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();

  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className="font-bold col-span-6">
        <h2 className="font-bold text-lg">News by category</h2>
        <div className="space-y-4 mt-6">
          {news.length > 0? news.map((n) => {
            return (
              <div key={n._id} className="p-6 rounded-md border">
                {n.title}
              </div>
            );
          }) : <h2 className="font-bold text-4xl text-center my-7">No news found!</h2>}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
