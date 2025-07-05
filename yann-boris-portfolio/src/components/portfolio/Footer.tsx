
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Create with <Heart className="w-4 h-4 text-red-500 mx-1" /> by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 ml-1">
              Yann Boris OUEDRAOGO
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Tous droits réservés
          </p>
          {/* <div className="mt-4">
            <Link 
              to="/auth" 
              className="text-gray-500 hover:text-purple-400 text-xs transition-colors"
            >
              Administrator
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
