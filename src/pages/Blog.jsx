import React from 'react';
import BlogTopSection from '../components/blog/BlogTopSection';
import BlogDivider from '../components/blog/BlogDivider';
import BlogPostsGridSection from '../components/blog/BlogPostsGridSection';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-white">

      <BlogTopSection />
      <BlogDivider />
      <BlogPostsGridSection />

    </div>
  );
};

export default Blog;