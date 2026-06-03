import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../config';

const MENU_ITEMS = [
  { label: 'Home', to: ROUTES.HOME, path: ROUTES.HOME },
  { label: 'What We Offer', to: ROUTES.WHAT_WE_OFFER, path: ROUTES.WHAT_WE_OFFER },
  { label: 'Subjects', to: ROUTES.SUBJECTS, path: ROUTES.SUBJECTS },
  { label: 'Pricing', to: ROUTES.PRICING, path: ROUTES.PRICING },
  { label: 'FAQ', to: ROUTES.FAQ, path: ROUTES.FAQ },
  { label: 'Contact', to: ROUTES.CONTACT, path: ROUTES.CONTACT },
  { label: 'Blog', to: ROUTES.BLOG, path: ROUTES.BLOG },
  { label: 'About', to: ROUTES.ABOUT, path: ROUTES.ABOUT },
];

const desktopLinkClass = (isActive) =>
  isActive
    ? 'text-orange-500 font-semibold transition-colors'
    : 'text-gray-700 hover:text-black transition-colors';

const mobileLinkClass = (isActive) =>
  isActive
    ? 'block px-3 py-2 rounded-md bg-orange-50 text-orange-600 font-semibold'
    : 'block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-black transition-colors';

const NavbarMenu = memo(({ mobile = false, onItemClick }) => {
  const location = useLocation();

  const isItemActive = (item) => location.pathname === item.path;

  if (mobile) {
    return (
      <ul className='space-y-1'>
        {MENU_ITEMS.map((item) => (
          <li key={`${item.label}-${item.to}`}>
            <Link
              to={item.to}
              onClick={onItemClick}
              className={mobileLinkClass(isItemActive(item))}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className='hidden xl:flex items-center gap-8 text-base'>
      {MENU_ITEMS.map((item) => (
        <li key={`${item.label}-${item.to}`}>
          <Link to={item.to} className={desktopLinkClass(isItemActive(item))}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
});

NavbarMenu.displayName = 'NavbarMenu';

export default NavbarMenu;