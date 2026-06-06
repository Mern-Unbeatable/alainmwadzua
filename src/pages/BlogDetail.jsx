import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import useRevealAnimation from '../hooks/useRevealAnimation';
import blogPosts from '../data/blogPosts.json';
import { ROUTES } from '../config';

const BlogDetail = () => {
  useRevealAnimation();
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to={ROUTES.BLOG} replace />;
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-14 md:py-16 lg:py-20">
        <Link
          to={ROUTES.BLOG}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-8"
          data-reveal="text"
          style={{ '--reveal-delay': '20ms' }}
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <header className="max-w-4xl mb-8" data-reveal="text" style={{ '--reveal-delay': '60ms' }}>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary mb-4">
            <span>{post.category}</span>
            <span className="inline-flex items-center gap-1 text-slate-400 normal-case tracking-normal">
              <Tag size={14} />
              Article
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </header>

        <div
          className="relative overflow-hidden rounded-3xl shadow-lg mb-8"
          data-reveal="card"
          style={{ '--reveal-delay': '110ms', height: 'clamp(260px, 40vw, 380px)' }}
        >
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <p className="text-base md:text-lg text-slate-600 leading-8" data-reveal="text" style={{ '--reveal-delay': '140ms' }}>
              {post.intro}
            </p>

            {post.sections.map((section, index) => (
              <section key={section.heading} data-reveal="text" style={{ '--reveal-delay': `${180 + index * 80}ms` }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                <div className="space-y-4 text-slate-600 leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.highlight ? (
                  <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-slate-700">
                    {section.highlight}
                  </div>
                ) : null}
              </section>
            ))}

            <div
              className="rounded-3xl bg-[#FFE5D8] border border-[#FFD0B6] p-6 md:p-8"
              data-reveal="card"
              style={{ '--reveal-delay': '340ms' }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{post.callout.title}</h3>
              <p className="text-slate-600 leading-7 mb-5 max-w-2xl">{post.callout.description}</p>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65d00]"
              >
                {post.callout.buttonText}
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6" data-reveal="card" style={{ '--reveal-delay': '220ms' }}>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={relatedPost.heroImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{relatedPost.date} · {relatedPost.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;