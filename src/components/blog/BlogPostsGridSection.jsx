import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../../data/blogPosts.json';

const blogPostPath = (slug) => `/blog/${slug}`;

const gridPosts = blogPosts.slice(1);

const BlogPostsGridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gridPosts.map((post, index) => (
        <Link
          key={post.slug}
          to={blogPostPath(post.slug)}
          className="bg-[#F8F5F0] rounded-3xl overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          data-reveal="card"
          style={{ '--reveal-delay': `${70 + index * 80}ms` }}
        >
          <div className="w-full h-56 overflow-hidden">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-semibold text-[#1a2b4c] mb-3 leading-snug group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6 grow">
              {post.excerpt}
            </p>

            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center text-gray-500 text-sm font-medium">
                <span>{post.date}</span>
                <span className="mx-1.5">•</span>
                <span>{post.readTime}</span>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:underline">
                Read More
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostsGridSection;