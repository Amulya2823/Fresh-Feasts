import { useRouteError } from "react-router-dom";

const Error = () => {
  let error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold uppercase my-4 flex gap-2 items-center">
        <div className="w-10 h-10 text-yellow-500" /> Oops!!
      </h1>
      <h1 className="text-xl">
        {error.status}: {error.statusText}
      </h1>
    </div>
  );
};

export default Error;
