import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-blue-500" />
        <span className="text-xl font-semibold text-white">Get Carezen</span>
      </div>
      <p>© {new Date().getFullYear()} Get Carezen. All rights reserved.</p>
    </footer>
  );
}