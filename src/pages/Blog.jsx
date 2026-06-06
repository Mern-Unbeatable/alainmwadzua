import React from "react";
import BlogTopSection from "../components/blog/BlogTopSection";
import BlogDivider from "../components/blog/BlogDivider";
import BlogPostsGridSection from "../components/blog/BlogPostsGridSection";
import useRevealAnimation from "../hooks/useRevealAnimation";

const Blog = () => {
  useRevealAnimation();

  return (
    <div className="container mx-auto px-4 py-14 md:py-16 lg:py-20 bg-white">
      <BlogTopSection />
      <div data-reveal="text" style={{ '--reveal-delay': '120ms' }}>
        <BlogDivider />
      </div>
      <BlogPostsGridSection />
    </div>
  );
};

export default Blog;
