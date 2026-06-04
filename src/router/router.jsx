import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout';
import { ROUTES } from '../config';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Services = lazy(() => import('../pages/Services'));
const WhatWeOffer = lazy(() => import('../pages/WhatWeOffer'));
const Subject = lazy(() => import('../pages/Subject'));
const Pricing = lazy(() => import('../pages/Pricing'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Blog = lazy(() => import('../pages/Blog'));

const PageLoader = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin' />
  </div>
);

const NotFound = () => (
  <div className='flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4'>
    <h1 className='text-6xl font-bold text-gray-800'>404</h1>
    <p className='text-xl text-gray-500'>Page not found</p>
    <a
      href={ROUTES.HOME}
      className='mt-2 text-blue-600 hover:underline text-sm font-medium'
    >
      Back to Home
    </a>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <Suspense fallback={<PageLoader />}>
            <Layout />
          </Suspense>
        }
      >
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.WHAT_WE_OFFER} element={<WhatWeOffer />} />
        <Route path={ROUTES.SUBJECTS} element={<Subject />} />
        <Route path={ROUTES.PRICING} element={<Pricing />} />
        <Route path={ROUTES.FAQ} element={<FAQ />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </>,
  ),
);

export default router;
