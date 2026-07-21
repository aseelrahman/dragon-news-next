import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

export const generateMetadata = async ({params, searchParams}) =>{
    const {id} = await params;
    const news = await getNewsDetailsById(id);

    return{
        title: news.title,
        description: news.details,
    }
}

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="card bg-base-100 shadow-sm">
        {/* Author Info */}
        <div className="card-body">
          <div className="flex justify-between items-center bg-slate-200 p-4 rounded-sm">
            <div className="flex gap-1 items-center">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              />

              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>

            <div className=" flex justify-between items-center">
              <CiShare2 className="text-xl" />
              <CiBookmark className="text-xl" />
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>

          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>
          <p>{news.details}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-2">
                <FaStar className="text-lg text-yellow-400" />
                {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-2">
                <FaEye className="text-lg" />
                {news.total_view}
              </h2>
            </div>
            <Link href={`/category/${news.category_id}`}>
              <button className="btn bg-purple-500 text-white">See other news for this category<BsArrowRight/></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
