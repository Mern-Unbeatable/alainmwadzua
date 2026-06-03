import React, { memo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, GraduationCap } from "lucide-react";
import { ROUTES } from "../config";
import NavbarMenu from "./NavbarMenu";

const Navbar = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2.5 shrink-0"
          >
            <span className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center">
              <GraduationCap size={28} />
            </span>
            <span className="text-black font-semibold text-lg md:text-xl tracking-tight">
              Online Class Writers
            </span>
          </Link>
          <NavbarMenu />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden xl:inline-flex items-center gap-2 bg-primary  text-white font-semibold text-sm px-5 py-2 rounded-md transition-colors"
            >
              Get Help
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="xl:hidden p-2 rounded text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden fixed top-20 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-xl"
        >
          <div className="max-w-6xl mx-auto px-4 py-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <NavbarMenu mobile onItemClick={closeMenu} />

            <button
              type="button"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-400 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
            >
              Get Help
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
