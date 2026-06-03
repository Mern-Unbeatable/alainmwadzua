import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG, ROUTES } from '../config';
import { Linkedin, Youtube } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'How It Works', to: ROUTES.SERVICES },
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Subjects', to: ROUTES.SERVICES },
  { label: 'Pricing', to: ROUTES.SERVICES },
];

const RESOURCE_LINKS = [
  { label: 'FAQ', to: ROUTES.CONTACT },
  { label: 'Contact', to: ROUTES.CONTACT },
  { label: 'Terms & Conditions', to: ROUTES.CONTACT },
];

const Footer = memo(() => {
  return (
    <footer className='bg-black text-white mt-10'>
      <div className='container mx-auto px-4 pt-10 pb-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div>
            <p className='font-semibold text-base'>{APP_CONFIG.NAME}</p>
            <p className='mt-4 text-gray-300 leading-7 max-w-xs'>
              Professional online class help, tutoring, and academic writing
              help for busy college students. Fast, confidential, and reliable.
            </p>

            <p className='mt-6 text-2xl font-extrabold tracking-tight'>
              WE ARE 100% BASED IN THE USA
            </p>

            <button
              type='button'
              className='mt-5 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-2.5 rounded-md transition-colors'
            >
              Get Help Now
            </button>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-gray-300'>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className='hover:text-white transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Resources & Legal</h3>
            <ul className='space-y-2 text-gray-300'>
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className='hover:text-white transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Support</h3>

            <button
              type='button'
              className='bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-2.5 rounded-md transition-colors'
            >
              Email Us
            </button>

            <div className='mt-5 flex items-center gap-3 text-gray-300'>
              <a href='#' aria-label='LinkedIn' className='hover:text-white'>
                <Linkedin size={18} />
              </a>
              <a href='#' aria-label='YouTube' className='hover:text-white'>
                <Youtube size={18} />
              </a>
              <a
                href='#'
                aria-label='X'
                className='hover:text-white text-lg leading-none'
              >
                X
              </a>
            </div>

            <div className='mt-4 flex items-center gap-2 flex-wrap'>
              <span className='bg-white text-[#00457C] text-xs font-bold px-2 py-1 rounded'>
                PayPal
              </span>
              <span className='bg-white text-[#006FCF] text-[10px] font-bold px-2 py-1 rounded'>
                AMEX
              </span>
              <span className='text-[#635BFF] text-2xl font-bold leading-none'>
                stripe
              </span>
              <span className='bg-white text-[#1A1F71] text-xs font-bold px-2 py-1 rounded'>
                VISA
              </span>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-white/15 pt-4 text-center text-gray-300'>
          &copy; 2026 OnlineClassWriters.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;