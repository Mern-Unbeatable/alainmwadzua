// import React from 'react';

// const latestPosts = [
//   {
//     id: 1,
//     title: 'Top Careers of the Future: Best Fields for College Students to Consider',
//     date: 'May 12',
//     readTime: '15 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
//   },
//   {
//     id: 2,
//     title: 'How to Avoid Plagiarism in Essays, Research Papers, and Assignments',
//     date: 'May 12',
//     readTime: '15 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
//   },
//   {
//     id: 3,
//     title: 'How to Get Reliable Homework Help for Online Classes',
//     date: 'May 12',
//     readTime: '15 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
//   },
//   {
//     id: 4,
//     title: 'Online Class Help for Busy Students: How to Stay...',
//     date: 'May 12',
//     readTime: '15 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
//   }
// ];

// const BlogTopSection = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//       <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-lg h-87.5 md:h-112.5 group cursor-pointer">
//         <img
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
//           alt="Students studying"
//           className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

//         <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
//           <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
//             How to Prepare for College Exams and Reduce Study Stress
//           </h1>
//           <div className="flex items-center text-gray-300 text-sm md:text-base font-medium">
//             <span>May 10</span>
//             <span className="mx-2">•</span>
//             <span>5 min read</span>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">Latest post</h2>
//         <div className="flex flex-col gap-6">
//           {latestPosts.map((post) => (
//             <div key={post.id} className="flex items-center gap-4 group cursor-pointer">
//               <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl">
//                 <img
//                   src={post.imageUrl}
//                   alt={post.title}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>
//               <div className="flex flex-col justify-center">
//                 <h3 className="text-[15px] font-bold text-[#1a2b4c] leading-snug group-hover:text-[#FF6B00] transition-colors line-clamp-3">
//                   {post.title}
//                 </h3>
//                 <div className="flex items-center text-gray-500 text-xs mt-2 font-medium">
//                   <span>{post.date}</span>
//                   <span className="mx-1.5">•</span>
//                   <span>{post.readTime}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogTopSection;






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

const BlogTopSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-full group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Students studying"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <h1 className="text-white text-3xl md:text-4xl font-medium mb-4 leading-tight">
            How to Prepare for College Exams and Reduce Study Stress
          </h1>
          <div className="flex items-center text-gray-300 text-sm md:text-base font-medium">
            <span>May 10</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      {/* Right Column - Dictates the overall height on Desktop */}
      <div className="flex flex-col h-full justify-between">
        <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">Latest post</h2>
        <div className="flex flex-col gap-6">
          {latestPosts.map((post) => (
            <div key={post.id} className="flex items-center gap-4 group cursor-pointer">
              <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base font-medium text-[#1a2b4c] leading-snug group-hover:text-[#FF6B00] transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2 font-medium">
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
  );
};

export default BlogTopSection;