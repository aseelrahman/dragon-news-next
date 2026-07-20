import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}
export default async function Home() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={null}/>
      </div>
      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        ALl News
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
