import { Link } from "react-router";
import logo from "../../assets/logo.png"
export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-sm relative z-50">
      
      <div className="w-full px-6 py-6 md:py-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
       
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              className="h-8"
              alt="Recipe Logo"
            />
            <span className="text-2xl font-semibold">Recipe</span>
          </Link>

          <span className="text-blue-700 font-bold text-2xl">
            React Router
          </span>
        </div>

        <hr className="my-6 border-gray-200" />

        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.facebook.com/EINagy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium"
          >
            Mohamed Gamal
          </a>
          . All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
