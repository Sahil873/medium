import { SigninInput, SignupInput } from "@sahil873/medium-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput | SigninInput>({
    name: "",
    email: "",
    password: "",
  });

  const sendReq = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const { jwt } = res.data;
      localStorage.setItem("token", jwt);
      return navigate("/blogs");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="mx-auto w-[60%]">
        <div>
          <h1 className="text-4xl text-center font-bold">
            {type === "signup" ? "Create an account" : "Signin to account"}
          </h1>
          <h2 className="text-slate-500 text-lg mt-2 text-center">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="pl-2 underline"
            >
              {type === "signup" ? "Signin" : "Signup"}
            </Link>
          </h2>
        </div>
        <div className="my-8">
          {type === "signup" && (
            <LabelledInput
              label="Name"
              placeholder="John Doe"
              onChange={(e) => {
                setPostInputs((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          )}
          <LabelledInput
            label="Email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => {
              setPostInputs((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <LabelledInput
            type="password"
            label="Password"
            placeholder="******"
            onChange={(e) => {
              setPostInputs((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </div>
        <button
          onClick={sendReq}
          className="w-full text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
