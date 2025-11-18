import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Pricing</h1>
          <p className="hero-subtitle">
            Simple, transparent pricing. Start with free tiers and scale as you grow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: 'var(--space-xl)' }}>
            {products.slice(0, 3).map((product, index) => (
              <div key={product.id} className={`pricing-card ${index === 1 ? 'featured' : ''}`}>
                <h3 className="pricing-name">{product.name}</h3>
                <div className="pricing-price">
                  ${product.pricing.startingAt}
                  <span>/{product.pricing.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-lg)' }}>
                  {product.tagline}
                </p>
                <ul className="feature-list mb-lg">
                  {product.features.slice(0, 5).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Products</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)' }}>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' }}>Product</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' }}>Type</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' }}>Starting Price</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' }}></th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} style={{ borderBottom: '1px solid var(--border-weak)' }}>
                    <td style={{ padding: 'var(--space-md)', fontWeight: '500' }}>{product.name}</td>
                    <td style={{ padding: 'var(--space-md)', color: 'var(--text-secondary)' }}>{product.tagline}</td>
                    <td style={{ padding: 'var(--space-md)' }}>
                      <strong>${product.pricing.startingAt}</strong>/{product.pricing.period}
                    </td>
                    <td style={{ padding: 'var(--space-md)' }}>
                      <Link to={`/products/${product.id}`} className="btn btn-ghost btn-sm">
                        Learn More
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="container-narrow">
            <div className="card mb-md">
              <h4 className="card-title">Do you offer free trials?</h4>
              <p className="card-description">
                Yes, all our products offer free trials. Contact us to get started.
              </p>
            </div>
            <div className="card mb-md">
              <h4 className="card-title">Can I upgrade or downgrade my plan?</h4>
              <p className="card-description">
                Yes, you can change your plan at any time. Changes take effect on your next billing cycle.
              </p>
            </div>
            <div className="card mb-md">
              <h4 className="card-title">Do you offer enterprise pricing?</h4>
              <p className="card-description">
                Yes, we offer custom enterprise plans with volume discounts and dedicated support. Contact sales for details.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">What payment methods do you accept?</h4>
              <p className="card-description">
                We accept all major credit cards and can arrange invoicing for enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Need Custom Pricing?</h2>
          <p className="section-subtitle mb-xl">
            Contact us for volume discounts, enterprise features, or custom requirements.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
