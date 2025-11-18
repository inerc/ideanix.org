import React from 'react';
import { Link, useParams } from 'react-router-dom';

const blogPostContent = {
  'how-we-built-logdoc': {
    title: 'How We Built LogDoc: Observability from Logs',
    date: '2024-11-15',
    category: 'Engineering',
    readTime: '8 min',
    content: `
## Introduction

When we started building LogDoc, we had a clear goal: create a log processing engine that could handle millions of events per second while remaining simple to deploy and operate.

## The Architecture

LogDoc is built in Go for maximum performance. The core pipeline consists of:

1. **Input handlers** - Accept logs from various sources (files, HTTP, syslog)
2. **Parser engine** - Automatically detect and parse structured logs
3. **Processing pipeline** - Apply transformations and enrichments
4. **Output handlers** - Send processed logs to storage or other systems

## Performance Optimizations

We spent considerable effort optimizing the hot paths:

- Zero-allocation parsing for common log formats
- Lock-free queues between pipeline stages
- Batch processing for output handlers

## Open Source

LogDoc is available under the MIT license. We believe that observability tools should be transparent and community-driven.

Check out the source code on GitHub and let us know what you think!
    `
  },
  'load-testing-at-scale': {
    title: 'Load Testing at Scale with Load Storm',
    date: '2024-11-10',
    category: 'Tutorial',
    readTime: '10 min',
    content: `
## Introduction

Load testing is critical for validating system performance, but testing at scale presents unique challenges. In this post, we'll show you how to use Load Storm to simulate realistic traffic patterns with thousands of concurrent users.

## Setting Up Your First Test

Load Storm uses JavaScript for test scripts, making it familiar to most developers:

\`\`\`javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function() {
  let response = http.get('https://api.example.com/users');
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
\`\`\`

## Distributed Testing

For high-load scenarios, Load Storm can distribute the load across multiple agents. Configure your test to run from multiple geographic regions to simulate realistic global traffic.

## Analyzing Results

Load Storm provides real-time dashboards showing:

- Response times (p50, p95, p99)
- Throughput (requests per second)
- Error rates
- System resource utilization

## Best Practices

1. Start small and scale up gradually
2. Test individual services before full stack
3. Establish performance baselines
4. Include realistic think times
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPostContent[slug];

  if (!post) {
    return (
      <div className="section text-center">
        <div className="container">
          <h1>Post Not Found</h1>
          <p className="text-secondary mb-lg">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">View All Posts</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <section className="hero">
        <div className="container">
          <Link to="/blog" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', display: 'inline-block' }}>
            ← Back to Blog
          </Link>
          <h1 className="hero-title" style={{ fontSize: 'var(--fs-4xl)' }}>{post.title}</h1>
          <div className="flex gap-md mt-md" style={{ justifyContent: 'center' }}>
            <span className="badge badge-primary">{post.category}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{post.date}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{post.readTime} read</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              whiteSpace: 'pre-line'
            }}
          >
            {post.content}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Want to Learn More?</h2>
          <p className="section-subtitle mb-xl">
            Check out our other blog posts or get in touch with our team.
          </p>
          <div className="flex-center gap-md">
            <Link to="/blog" className="btn btn-secondary">
              More Posts
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
