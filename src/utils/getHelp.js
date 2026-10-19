import { ROUTES } from '../config';

export const CTA_SECTION_ID = 'online-help-cta';

/** Smooth-scroll to the home page quote form. Returns false when it is not on the page. */
export const scrollToHelpCta = () => {
  const element = document.getElementById(CTA_SECTION_ID);
  if (!element) return false;
  element.scrollIntoView({ behavior: 'smooth' });
  return true;
};

/** "Get Help" buttons: scroll to the quote form on the home page, otherwise open Contact. */
export const handleGetHelp = () => {
  const { pathname } = window.location;
  if (pathname === '/' || pathname === ROUTES.HOME) {
    if (scrollToHelpCta()) return;
  }
  window.location.href = ROUTES.CONTACT;
};
