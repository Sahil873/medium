const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center">
      <div className="mx-auto">
        <p className="max-w-lg text-3xl font-bold">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns"
        </p>
        <div className="mt-4">
          <p className="text-xl font-semibold">Jules Winnfield</p>
          <p className="text-slate-600 text-sm font-medium">CEO | Acme Corp</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
