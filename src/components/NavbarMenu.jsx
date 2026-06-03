import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../config';

const MENU_ITEMS = [
  { label: 'Home', to: ROUTES.HOME, path: ROUTES.HOME, exact: true },
  {
    label: 'What We Offer',
    to: ROUTES.SERVICES,
    path: ROUTES.SERVICES,
    exact: true,
  },
  {
    label: 'Subjects',
    to: `${ROUTES.SERVICES}#subjects`,
    path: ROUTES.SERVICES,
    hash: '#subjects',
  },
  {
    label: 'Pricing',
    to: `${ROUTES.SERVICES}#pricing`,
    path: ROUTES.SERVICES,
    hash: '#pricing',
  },
  {
    label: 'FAQ',
    to: `${ROUTES.CONTACT}#faq`,
    path: ROUTES.CONTACT,
    hash: '#faq',
  },
  { label: 'Contact', to: ROUTES.CONTACT, path: ROUTES.CONTACT, exact: true },
  {
    label: 'Blog',
    to: `${ROUTES.ABOUT}#blog`,
    path: ROUTES.ABOUT,
    hash: '#blog',
  },
  { label: 'About', to: ROUTES.ABOUT, path: ROUTES.ABOUT, exact: true },
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

  const isItemActive = (item) => {
    if (item.hash) {
      return location.pathname === item.path && location.hash === item.hash;
    }

    if (item.exact) {
      return location.pathname === item.path && !location.hash;
    }

    return location.pathname.startsWith(item.path);
  };

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
    <ul className='hidden lg:flex items-center gap-8 text-[15px]'>
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