const Avatar = ({ name, s }: { name: string; s: number }) => {
  return (
    <div
      className={
        "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" +
        ` w-${s} h-${s}`
      }
    >
      <span
        className={`text-gray-600 dark:text-gray-300 ${
          s === 6 ? "text-sm" : "text-md"
        }`}
      >
        {name.length > 0 ? name[0] : "A"}
      </span>
    </div>
  );
};

export default Avatar;
