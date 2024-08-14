import { ChangeEvent } from "react";

interface labelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputType) => {
  return (
    <div className="my-2">
      <label className="block mb-2 text-md font-medium">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded px-2 py-2 w-full"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default LabelledInput;
