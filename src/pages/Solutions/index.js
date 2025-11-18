import React from 'react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 'observability',
    title: 'Observability & Monitoring',
    description: 'Gain deep visibility into your systems with comprehensive logging, metrics, and tracing.',
    useCases: [
      'Application performance monitoring',
      'Infrastructure monitoring',
      'Log aggregation and analysis',
      'Real-time alerting'
    ],
    products: ['LogDoc Cloud']
  },
  {
    id: 'load-testing',
    title: 'Performance & Load Testing',
    description: 'Validate system performance and scalability before deployment.',
    useCases: [
      'API load testing',
      'Website stress testing',
      'Microservices performance validation',
      'Capacity planning'
    ],
    products: ['Load Storm']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Analysis',
    description: 'Analyze and optimize your infrastructure configuration for reliability and security.',
    useCases: [
      'Security audits',
      'Compliance checking',
      'Cost optimization',
      'Configuration drift detection'
    ],
    products: ['Environment Analyzer']
  },
  {
    id: 'automation',
    title: 'Industrial Automation',
    description: 'Custom automation solutions for manufacturing and industrial operations.',
    useCases: [
      'Packaging line automation',
      'Quality control systems',
      'IoT sensor integration',
      'Process optimization'
    ],
    products: ['Industrial Automation']
  }
];

const Solutions = () => {
  return (
    <div className="solutions-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Solutions</h1>
          <p className="hero-subtitle">
            Explore how Ideanix products solve real engineering challenges
            across different use cases.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="card"
              style={{
                marginBottom: 'var(--space-xl)',
                padding: 'var(--space-2xl)'
              }}
            >
              <div className="grid grid-2" style={{ gap: 'var(--space-xl)', alignItems: 'start' }}>
                <div>
                  <h2 style={{ marginBottom: 'var(--space-md)' }}>{solution.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                    {solution.description}
                  </p>
                  <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                    {solution.products.map((product, i) => (
                      <span key={i} className="badge badge-primary">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>Use Cases:</h4>
                  <ul className="feature-list">
                    {solution.useCases.map((useCase, i) => (
                      <li key={i}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Need a Custom Solution?</h2>
          <p className="section-subtitle mb-xl">
            Our engineering team can help design and implement solutions
            tailored to your specific requirements.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
