
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import useRevealAnimation from "../hooks/useRevealAnimation";
import blogPosts from "../data/blogPosts.json";
import { ROUTES } from "../config";

const BlogDetail = () => {
  useRevealAnimation();
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to={ROUTES.BLOG} replace />;
  }

  // Get 3 related posts for the bottom section
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Main Article Container */}
      <div className="container mx-auto px-4 py-14 md:py-16 lg:py-20 ">
        <div className="">
          {/* Back Link */}
          <Link
            to={ROUTES.BLOG}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#FF6B00] transition-colors mb-8"
            data-reveal="text"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          {/* Header Area */}
          <header className="mb-10" data-reveal="text">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1a2b4c] leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              <span className="inline-flex items-center gap-2">
                <User size={16} className="text-[#FF6B00]" />
                {post.author || "Dr. Sarah Collins"}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Hero Image */}
          <div
            className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl mb-12"
            data-reveal="card"
          >
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <article className="space-y-10">
            <p
              className="text-base md:text-lg text-slate-600 leading-relaxed"
              data-reveal="text"
            >
              {post.intro}
            </p>

            {post.sections.map((section, index) => (
              <section key={section.heading} data-reveal="text">
                <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>

                {/* Highlight / Blockquote */}
                {section.highlight && (
                  <div className="mt-6 rounded-lg bg-[#F4F7FF] px-6 py-5 border-l-4 border-[#D8E4FF]">
                    <p className="text-[#1a2b4c] italic text-sm md:text-base font-medium">
                      "{section.highlight}"
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Centered CTA Callout Box */}
            <div
              className="rounded-2xl bg-[#FFE5D8] px-6 py-10 md:py-12 flex flex-col items-center text-center"
              data-reveal="card"
            >
              <h3 className="text-2xl font-bold text-[#1a2b4c] mb-3">
                {post.callout?.title || "Need Help With Your Classes?"}
              </h3>
              <p className="text-slate-700 leading-relaxed mb-8 max-w-xl text-sm md:text-base">
                {post.callout?.description ||
                  "Don't let one difficult subject pull down your entire GPA. Our professional writers and academic experts are ready to assist you with essays, exams, and full-course management."}
              </p>

              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF6B00] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#e65d00] mb-5 shadow-sm"
              >
                {post.callout?.buttonText || "Get Free Quote Now"}
                <ArrowRight size={16} />
              </Link>

              <div className="flex items-center gap-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#FF6B00]" />
                  Secured Privacy
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#FF6B00]" />
                  Expert Writers
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Read Next Section */}
      <div className="container mx-auto px-4 pb-14 md:pb-16 lg:pb-20  border-t border-gray-200 pt-16">
        <div className=" ">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#1a2b4c]">Read Next</h2>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Related Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.slug}
                className="bg-[#FAF8F5] rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedPost.heroImage}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold text-[#1a2b4c] mb-3 leading-snug">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow">
                    {relatedPost.intro}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-500 font-medium">
                      {relatedPost.date} • {relatedPost.readTime}
                    </span>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="text-sm font-semibold text-[#FF6B00] hover:text-[#e65d00] flex items-center gap-1"
                    >
                      Read More <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
