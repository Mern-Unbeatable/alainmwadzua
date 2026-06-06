import React from 'react';
import BlogTopSection from '../components/blog/BlogTopSection';
import BlogDivider from '../components/blog/BlogDivider';
import BlogPostsGridSection from '../components/blog/BlogPostsGridSection';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-14 md:py-16 lg:py-20 bg-white">

      <BlogTopSection />
      <BlogDivider />
      <BlogPostsGridSection />

    </div>
  );
};

export default Blog;