import React from 'react';

const gridPosts = [
  {
    id: 1,
    title: 'Top Careers of the Future: Best Fields for College Students to Consider',
    excerpt: 'As a college student, understanding future careers and emerging job opportunities is crucial for making informed decisions about your major and career path.',
    date: 'May 12',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'How to Avoid Plagiarism in Essays, Research Papers, and Assignments',
    excerpt: 'Plagiarism is a serious academic integrity violation that can have severe consequences for college students. Learn how to properly cite sources and maintain academic integrity.',
    date: 'May 12',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'How to Get Reliable Homework Help for Online Classes',
    excerpt: 'Online classes present unique challenges for busy students. Learn how to find reliable homework help and academic support to ensure your success.',
    date: 'May 12',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const BlogPostsGridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gridPosts.map((post) => (
        <div key={post.id} className="bg-[#FAF8F4] rounded-3xl overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
          <div className="w-full h-56 overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold text-[#1a2b4c] mb-3 leading-snug group-hover:text-[#FF6B00] transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
              {post.excerpt}
            </p>

            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <span>{post.date}</span>
                <span className="mx-1.5">•</span>
                <span>{post.readTime}</span>
              </div>
              <button className="text-[#FF6B00] text-sm font-semibold flex items-center gap-1 hover:underline">
                Read More
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsGridSection;