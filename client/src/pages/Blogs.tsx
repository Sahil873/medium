import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <>
      <AppBar name="Sahil" />
      {loading ? (
        <div className="flex flex-col items-center py-4">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      ) : (
        <div className="flex flex-col items-center py-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="15 Aug, 2024"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
