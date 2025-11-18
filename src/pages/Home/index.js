import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ossProjects } from '../../data/oss-projects';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Engineering Tools for<br />Modern Infrastructure
          </h1>
          <p className="hero-subtitle">
            Observability, load testing, infrastructure analysis, and industrial automation.
            Open source at heart, enterprise-ready at scale.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              Explore Products
            </Link>
            <Link to="/open-source" className="btn btn-secondary btn-lg">
              View Open Source
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">10+</div>
              <div className="stat-label">Open Source Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Enterprise-grade tools for observability, testing, and infrastructure management.
            </p>
          </div>
          <div className="grid grid-3">
            {products.slice(0, 3).map(product => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="product-card"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="product-icon"
                  style={{ background: `${product.color}20`, color: product.color }}
                >
                  {product.name.charAt(0)}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-tagline">{product.tagline}</div>
                <p className="product-description">{product.description}</p>
                <div className="product-pricing">
                  Starting at <strong>${product.pricing.startingAt}</strong>/{product.pricing.period}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-xl">
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Source</h2>
            <p className="section-subtitle">
              We believe in transparency and community collaboration.
              Explore our open-source projects and contribute.
            </p>
          </div>
          <div className="grid grid-2">
            {ossProjects.slice(0, 4).map(project => (
              <div key={project.id} className="oss-card">
                <div className="oss-card-header">
                  <div>
                    <h3 className="oss-name">{project.name}</h3>
                    <span className="badge badge-success">{project.language}</span>
                  </div>
                  <span className="oss-license">{project.license}</span>
                </div>
                <p className="card-description">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm mt-md"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-xl">
            <Link to="/open-source" className="btn btn-primary">
              Explore All OSS Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ideanix Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Ideanix?</h2>
            <p className="section-subtitle">
              Built by engineers, for engineers.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h4 className="card-title">Engineering First</h4>
              <p className="card-description">
                We build tools that solve real engineering problems.
                No marketing fluff, just solutions that work.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Open Source Core</h4>
              <p className="card-description">
                Our core technologies are open source.
                Transparency builds trust and better software.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Enterprise Ready</h4>
              <p className="card-description">
                Scale from startup to enterprise with confidence.
                SLA guarantees and dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle mb-xl">
            Contact us to discuss your needs or start with our free tier.
          </p>
          <div className="flex-center gap-md">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
