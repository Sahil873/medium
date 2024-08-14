import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="border-b py-4 w-2/3 lg:w-1/2 cursor-pointer"
    >
      <div className="flex items-center">
        <Avatar name={authorName} s={6} />
        <div className="text-sm pl-2">{authorName}</div>
        <span className="mx-2 w-[3px] h-[3px] bg-gray-500 rounded-full"></span>
        <div className="text-sm text-slate-500">{publishedDate}</div>
      </div>
      <div className="pt-2 pb-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg font-thin">{content.slice(0, 170) + "..."}</p>
      </div>
      <div>
        <p className="text-slate-500 text-md font-thin">
          {Math.ceil(content.length / 100)} min read
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
