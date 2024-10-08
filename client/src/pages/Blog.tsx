import AppBar from "../components/AppBar";
import SingleBlog from "../components/SingleBlog";
import SingleSkeleton from "../components/SingleSkeleton";
import { blog, useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");

  return (
    <div>
      <AppBar name="Sahil" />
      {loading ? (
        <SingleSkeleton />
      ) : (
        <SingleBlog blog={blog || ({} as blog)} />
      )}
    </div>
  );
};

export default Blog;
