import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'fintech-observability',
    title: 'Fintech Observability at Scale',
    client: 'Financial Services Company',
    description: 'Implemented comprehensive log aggregation and monitoring for a high-frequency trading platform processing millions of transactions per day.',
    results: [
      '10x faster incident detection',
      '99.99% system uptime',
      '60% reduction in MTTR'
    ],
    products: ['LogDoc Cloud']
  },
  {
    id: 'ecommerce-load-testing',
    title: 'E-commerce Load Testing',
    client: 'Online Retail Platform',
    description: 'Designed and executed load tests simulating Black Friday traffic patterns to ensure platform stability during peak sales events.',
    results: [
      'Validated 100k concurrent users',
      'Identified 12 performance bottlenecks',
      'Zero downtime during peak events'
    ],
    products: ['Load Storm']
  },
  {
    id: 'packaging-automation',
    title: 'Packaging Line Automation',
    client: 'Food Manufacturing Company',
    description: 'Engineered a complete automation solution for a high-speed packaging line, including PLC programming, sensor integration, and quality control systems.',
    results: [
      '40% increase in throughput',
      '95% reduction in packaging errors',
      'ROI achieved in 8 months'
    ],
    products: ['Industrial Automation']
  },
  {
    id: 'infrastructure-audit',
    title: 'Cloud Infrastructure Audit',
    client: 'Healthcare SaaS Provider',
    description: 'Conducted comprehensive infrastructure analysis to identify security vulnerabilities and ensure HIPAA compliance before SOC 2 certification.',
    results: [
      '23 security issues identified',
      'HIPAA compliance achieved',
      'SOC 2 certification obtained'
    ],
    products: ['Environment Analyzer']
  }
];

const CaseStudies = () => {
  return (
    <div className="case-studies-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Case Studies</h1>
          <p className="hero-subtitle">
            Real-world examples of how Ideanix products solve engineering challenges.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            {caseStudies.map(study => (
              <div key={study.id} className="card" style={{ padding: 'var(--space-xl)' }}>
                <div className="badge badge-primary mb-md">{study.client}</div>
                <h3 style={{ marginBottom: 'var(--space-md)' }}>{study.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                  {study.description}
                </p>

                <h4 style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                  Results:
                </h4>
                <ul className="feature-list mb-lg">
                  {study.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>

                <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                  {study.products.map((product, i) => (
                    <span key={i} className="badge badge-success">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Your Story Could Be Here</h2>
          <p className="section-subtitle mb-xl">
            Let us help you solve your engineering challenges.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
