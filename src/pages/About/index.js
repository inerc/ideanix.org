import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">About Ideanix</h1>
          <p className="hero-subtitle">
            Engineering tools and open-source solutions for modern infrastructure.
            Built by engineers, for engineers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Our Mission</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                To empower engineering teams with tools that make observability, testing,
                and infrastructure management accessible, reliable, and scalable.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                We believe that great engineering tools should be transparent, well-documented,
                and backed by strong communities. That's why we maintain open-source cores
                for all our major products.
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Our Vision</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                A world where every engineering team has access to enterprise-grade tools
                without enterprise-grade complexity or cost.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                We're building the infrastructure layer that companies rely on to understand,
                test, and improve their systems every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h4 className="card-title">Engineering Excellence</h4>
              <p className="card-description">
                We build tools that we would want to use ourselves.
                Quality and reliability are non-negotiable.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Transparency</h4>
              <p className="card-description">
                Open source, clear pricing, honest documentation.
                No surprises, no hidden costs.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Community First</h4>
              <p className="card-description">
                We listen to our users and contribute back.
                Great software is built together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="container-narrow">
            <h2 className="section-title text-center mb-xl">Company Story</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
              Ideanix was founded in 2024 by engineers who saw a gap in the market for
              engineering tools that combined the power of enterprise software with the
              transparency of open source.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
              Having worked at companies of all sizes, from startups to Fortune 500,
              we experienced firsthand the challenges of observability, load testing,
              and infrastructure management. Existing tools were either too complex,
              too expensive, or too opaque.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              We set out to build something better: tools that are powerful yet simple,
              enterprise-ready yet affordable, and most importantly, open at their core.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership</h2>
          </div>
          <div className="container-narrow">
            <div className="card">
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Evgenii Kozinchenko</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                Founder & Principal Engineer
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Evgenii brings over a decade of experience in software engineering,
                infrastructure, and industrial automation. Before founding Ideanix,
                he led engineering teams at various tech companies and worked on
                large-scale distributed systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Company Details</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h4 className="card-title">Legal Entity</h4>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                <strong>Ideanix, LLC</strong><br />
                Delaware Limited Liability Company<br />
                EIN: 35-2857145<br />
                Incorporated: June 20, 2024
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Office</h4>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                10 Kunayeva Street<br />
                Emerald Tower, 3rd Floor<br />
                Astana, Kazakhstan 010000
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title">Work With Us</h2>
          <p className="section-subtitle mb-xl">
            Interested in joining our team or partnering with us?
            We'd love to hear from you.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
