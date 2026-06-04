import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../config";
import { GraduationCap, Linkedin, Youtube } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", to: ROUTES.HOME },
  { label: "How It Works", to: ROUTES.SERVICES },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Subjects", to: ROUTES.SERVICES },
  { label: "Pricing", to: ROUTES.SERVICES },
];

const RESOURCE_LINKS = [
  { label: "FAQ", to: ROUTES.CONTACT },
  { label: "Contact", to: ROUTES.CONTACT },
  { label: "Terms & Conditions", to: ROUTES.CONTACT },
];

const Footer = memo(() => {
  return (
    <footer className="bg-black text-white ">
      <div className="container mx-auto px-4 pt-10 pb-5">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 xl:grid-cols-[1.35fr_0.8fr_1fr_0.95fr] xl:gap-x-14 items-start">
          <div className="max-w-sm">
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-2.5 shrink-0"
            >
              <span className="w-11 h-11 rounded-lg bg-primary text-white flex items-center justify-center">
                <GraduationCap size={28} />
              </span>
              <span className="text-white font-semibold text-lg  tracking-tight">
                Online Class Writers
              </span>
            </Link>
            <p className="mt-2 text-gray-300 max-w-xs text-base">
              Professional online class help, tutoring, and academic writing
              help for busy college students. Fast, confidential, and reliable.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <img src="/us.webp" alt="USA Map Icon" className="h-9 w-auto" />
              <p className="text-base md:text-lg font-medium md:font-semibold text-white">
                WE ARE 100% BASED IN THE USA
              </p>
            </div>

            <button
              type="button"
              className="mt-5 bg-primary hover:bg-orange-400 text-white px-5 py-2.5 rounded-md transition-colors"
            >
              Get Help Now
            </button>
          </div>

          <div className="xl:justify-self-center">
            <h3 className="text-lg font-medium mb-4.5">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-white text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:justify-self-center">
            <h3 className="text-lg font-medium mb-4.5">Resources & Legal</h3>
            <ul className="space-y-2 text-gray-300">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:justify-self-end xl:min-w-64">
            <h3 className="text-lg font-medium mb-4.5">Contact Support</h3>

            <button
              type="button"
              className="bg-primary hover:bg-orange-400 text-white px-5 py-2.5 rounded-md transition-colors"
            >
              Email Us
            </button>

            <div className="mt-5 flex items-center gap-3 text-gray-300">
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <Youtube size={18} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="hover:text-white text-lg leading-none"
              >
                X
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <img
                src="/paypallogo.png"
                alt="PayPal Logo"
                className="h-8 w-auto"
              />
              <img
                src="/ae.png"
                alt="American Express Logo"
                className="h-8 w-auto"
              />
              <img src="/stripe.png" alt="Stripe Logo" className="h-8 w-auto" />
              <img src="/visalogo.png" alt="Visa Logo" className="h-8 w-auto" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-gray-300">
          &copy; 2026 OnlineClassWriters.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
