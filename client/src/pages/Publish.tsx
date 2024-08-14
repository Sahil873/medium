import { ChangeEvent, useState } from "react";
import AppBar from "../components/AppBar";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleCreateBlog = async () => {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    navigate(`/blog/${res.data.blogId}`);
  };

  return (
    <div>
      <AppBar name="Sahil" />

      <div className="max-w-screen-lg mx-auto pt-8">
        <div className="mb-6">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            type="text"
            placeholder="Title"
            className="block w-full p-4 text-xl font-medium outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          />

          <textarea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
            rows={4}
            className="block mt-2 mb-4 p-2.5 w-full text-lg outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
          ></textarea>

          <button
            onClick={handleCreateBlog}
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-xl text-base px-4 py-2"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
