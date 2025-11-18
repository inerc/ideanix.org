import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: 'how-we-built-logdoc',
    title: 'How We Built LogDoc: Observability from Logs',
    excerpt: 'A deep dive into the architecture and design decisions behind LogDoc, our open-source log processing engine.',
    date: '2024-11-15',
    category: 'Engineering',
    readTime: '8 min'
  },
  {
    slug: 'load-testing-at-scale',
    title: 'Load Testing at Scale with Load Storm',
    excerpt: 'Learn how to design and execute distributed load tests that simulate thousands of concurrent users.',
    date: '2024-11-10',
    category: 'Tutorial',
    readTime: '10 min'
  },
  {
    slug: 'ai-infrastructure-mapping',
    title: 'AI-Assisted Infrastructure Mapping',
    excerpt: 'How we use machine learning to automatically map and analyze infrastructure configurations.',
    date: '2024-11-05',
    category: 'Engineering',
    readTime: '6 min'
  },
  {
    slug: 'packaging-line-automation',
    title: 'Engineering a Packaging Line Automation',
    excerpt: 'A case study of how we automated a high-speed packaging line for a manufacturing client.',
    date: '2024-10-28',
    category: 'Case Study',
    readTime: '12 min'
  },
  {
    slug: 'building-xk6-extensions',
    title: 'Building xk6 Extensions for Real Production Loads',
    excerpt: 'How to create custom k6 extensions for testing Kafka, PostgreSQL, and other production systems.',
    date: '2024-10-20',
    category: 'Tutorial',
    readTime: '15 min'
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Blog</h1>
          <p className="hero-subtitle">
            Engineering insights, tutorials, and case studies from the Ideanix team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {blogPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="blog-card-image" />
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="badge badge-primary" style={{ marginRight: 'var(--space-sm)' }}>
                      {post.category}
                    </span>
                    {post.readTime} read
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-subtitle mb-xl">
            Follow us on GitHub for the latest updates on our open-source projects.
          </p>
          <a
            href="https://github.com/ideanix"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Follow on GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
