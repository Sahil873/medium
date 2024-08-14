import { blog } from "../hooks";
import Avatar from "./Avatar";

const SingleBlog = ({ blog }: { blog: blog }) => {
  return (
    <>
      <div className="grid grid-cols-12 px-8 py-12 max-w-screen-xl mx-auto">
        <div className="col-span-8">
          <div className="mb-4 pb-2 border-b">
            <h1 className="text-5xl font-bold">{blog.title}</h1>
            <p className="text-lg text-slate-500 mt-2">
              Posted on <span>15 Aug, 2024</span>
            </p>
          </div>
          <p className="text-lg text-gray-700">{blog.content}</p>
        </div>
        <div className="col-span-4 pl-4">
          <h1 className="text-lg font-semibold">Author</h1>
          <div className="grid grid-cols-12 px-2 py-4">
            <span className="col-span-2 h-full flex items-center justify-center">
              <Avatar name={blog.author.name || "Anonymous"} s={8} />
            </span>
            <div className="col-span-10">
              <h6 className="text-2xl font-bold pb-1">
                {blog.author.name || "Anonymous"}
              </h6>
              <p className="col-span-8 text-md text-gray-700">
                Master of mirth, purveyor of puns, and the funniest person in
                the kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
