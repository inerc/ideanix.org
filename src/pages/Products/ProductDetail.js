import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../data/products';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="section text-center">
        <div className="container">
          <h1>Product Not Found</h1>
          <p className="text-secondary mb-lg">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn btn-primary">View All Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <section className="hero">
        <div className="container">
          <div className="badge badge-primary mb-md">{product.tagline}</div>
          <h1 className="hero-title">{product.name}</h1>
          <p className="hero-subtitle">{product.description}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Overview</h2>
              <p style={{ whiteSpace: 'pre-line', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {product.longDescription}
              </p>
            </div>
            <div>
              <div className="card" style={{ position: 'sticky', top: '80px' }}>
                <h3 style={{ marginBottom: 'var(--space-md)' }}>Pricing</h3>
                <div style={{ fontSize: 'var(--fs-4xl)', fontWeight: '700', marginBottom: 'var(--space-md)' }}>
                  ${product.pricing.startingAt}
                  <span style={{ fontSize: 'var(--fs-md)', color: 'var(--text-secondary)', fontWeight: '400' }}>
                    /{product.pricing.period}
                  </span>
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--space-md)' }}>
                  Contact Sales
                </Link>
                <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-secondary)', textAlign: 'center' }}>
                  Free trial available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title text-center mb-xl">Features</h2>
          <div className="grid grid-3">
            {product.features.map((feature, i) => (
              <div key={i} className="card">
                <p style={{ color: 'var(--text-primary)', margin: 0 }}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-xl">Use Cases</h2>
          <div className="grid grid-2">
            {product.useCases.map((useCase, i) => (
              <div key={i} className="card">
                <h4 className="card-title">{useCase}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title text-center mb-xl">Integrations</h2>
          <div className="flex-center gap-lg" style={{ flexWrap: 'wrap' }}>
            {product.integrations.map((integration, i) => (
              <span key={i} className="badge badge-primary" style={{ fontSize: 'var(--fs-md)', padding: 'var(--space-sm) var(--space-md)' }}>
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle mb-xl">
            Contact us to discuss your requirements and get a personalized demo.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
