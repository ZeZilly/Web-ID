import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-bright border-t border-outline-variant mt-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-on-surface">multilingual.no</div>
        <div className="flex flex-wrap justify-center gap-md">
          <Link
            className="text-sm font-['Inter'] text-on-surface-variant hover:text-primary hover:underline transition-all duration-150 ease-in-out"
            to="/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm font-['Inter'] text-on-surface-variant hover:text-primary hover:underline transition-all duration-150 ease-in-out"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm font-['Inter'] text-on-surface-variant hover:text-primary hover:underline transition-all duration-150 ease-in-out"
            to="/cookie-policy"
          >
            Cookie Policy
          </Link>
          <Link
            className="text-sm font-['Inter'] text-on-surface-variant hover:text-primary hover:underline transition-all duration-150 ease-in-out"
            to="/impressum"
          >
            Impressum
          </Link>
          <a
            className="text-sm font-['Inter'] text-on-surface-variant hover:text-primary hover:underline transition-all duration-150 ease-in-out"
            href="mailto:contact@multilingual.no"
          >
            Contact Us
          </a>
        </div>
        <div className="text-sm font-['Inter'] text-on-surface-variant text-center md:text-left">
          © 2026 multilingual.no. Precision AI Localization.
        </div>
      </div>
    </footer>
  );
}
