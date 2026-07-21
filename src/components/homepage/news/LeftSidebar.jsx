import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">ALl Categories</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.map((category) => {
          return (
            <li
              key={category?.category_id}
              className={`${activeId === category.category_id && "bg-purple-500 text-white"} p-2 rounded-md font-bold text-center text-md`}
            >
              <Link href={`/category/${category.category_id}`} className="block">{category.category_name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
