import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-300">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 text-white bg-black rounded-lg
                     hover:bg-gray-800 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
