import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const Products = () => {
  return (
    <div className="products-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Products</h1>
          <p className="hero-subtitle">
            Enterprise-grade tools for observability, testing, infrastructure analysis,
            and industrial automation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            {products.map(product => (
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
                <ul className="feature-list mt-md">
                  {product.features.slice(0, 4).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Need a Custom Solution?</h2>
          <p className="section-subtitle mb-xl">
            Our team can help you design and implement custom engineering solutions.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
