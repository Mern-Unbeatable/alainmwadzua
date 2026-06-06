import { useEffect } from 'react';

const useRevealAnimation = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!revealElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export default useRevealAnimation;