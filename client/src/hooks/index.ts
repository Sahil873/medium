import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface blog {
  id: string;
  author: { name: string };
  title: string;
  content: string;
  publishedDate: string;
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data["blogs"]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return { loading, blogs };
};

export const useBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data["blog"]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return { loading, blog };
};
