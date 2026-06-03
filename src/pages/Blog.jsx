import React from 'react';

const latestPosts = [
  {
    id: 1,
    title: 'Top Careers of the Future: Best Fields for College Students to Consider',
    date: 'May 12',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    title: 'How to Avoid Plagiarism in Essays, Research Papers, and Assignments',
    date: 'May 12',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    title: 'How to Get Reliable Homework Help for Online Classes',
    date: 'May 12',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    title: 'Online Class Help for Busy Students: How to Stay...',
    date: 'May 12',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

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

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Featured Post (Left, spans 2 columns) */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-lg h-[350px] md:h-[450px] group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Students studying" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
              How to Prepare for College Exams and Reduce Study Stress
            </h1>
            <div className="flex items-center text-gray-300 text-sm md:text-base font-medium">
              <span>May 10</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Latest Posts Sidebar (Right) */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">Latest post</h2>
          <div className="flex flex-col gap-6">
            {latestPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[15px] font-bold text-[#1a2b4c] leading-snug group-hover:text-[#FF6B00] transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs mt-2 font-medium">
                    <span>{post.date}</span>
                    <span className="mx-1.5">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-300" />

      {/* Bottom Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gridPosts.map((post) => (
          <div key={post.id} className="bg-[#FAF8F4] rounded-3xl overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            
            {/* Card Image */}
            <div className="w-full h-56 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[#1a2b4c] mb-3 leading-snug group-hover:text-[#FF6B00] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              
              {/* Card Footer */}
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

    </div>
  );
};

export default Blog;