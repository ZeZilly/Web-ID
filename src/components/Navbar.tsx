import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-bright/90 backdrop-blur-md border-b border-surface-container-highest shadow-sm font-['Inter'] antialiased text-on-surface transition-all duration-200 ease-out">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="multilingual.no Logo" className="h-8 w-auto" />
        </Link>
        <div className="hidden md:flex space-x-sm">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container rounded-sm px-3 py-2 font-button text-button"
            href="/#services"
          >
            Services
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container rounded-sm px-3 py-2 font-button text-button"
            href="/#how-it-works"
          >
            How it Works
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container rounded-sm px-3 py-2 font-button text-button"
            href="/#about"
          >
            About
          </a>
        </div>
        <Link
          to="/request-services"
          className="bg-primary text-on-primary font-button text-button px-sm py-xs rounded-DEFAULT hover:bg-on-primary-fixed-variant transition-colors shadow-sm"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
