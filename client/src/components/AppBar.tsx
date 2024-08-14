import { Link, useLocation } from "react-router-dom";
import Avatar from "./Avatar";

const AppBar = ({ name }: { name: string }) => {
  const { pathname } = useLocation();

  return (
    <div className="px-8 py-4 text-lg flex justify-between items-center border-b">
      <Link to={"/blogs"} className="cursor-pointer">
        Medium
      </Link>
      <div className="flex h-full items-center">
        {pathname !== "/publish" && (
          <Link
            to={"/publish"}
            className="focus:outline-none text-white bg-green-600 hover:bg-green-700 font-medium rounded-2xl text-base px-4 py-1 me-4"
          >
            Create Blog
          </Link>
        )}

        <Avatar name={name} s={8} />
      </div>
    </div>
  );
};

export default AppBar;
