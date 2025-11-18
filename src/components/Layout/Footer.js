import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Ideanix</div>
            <p className="footer-description">
              Engineering tools and open-source solutions for observability,
              load testing, infrastructure analysis, and industrial automation.
            </p>
            <p className="footer-description" style={{ marginTop: '16px' }}>
              <strong>Ideanix, LLC</strong><br />
              Delaware LLC, EIN: 35-2857145
            </p>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/logdoc-cloud">LogDoc Cloud</Link></li>
              <li><Link to="/products/load-storm">Load Storm</Link></li>
              <li><Link to="/products/environment-analyzer">Environment Analyzer</Link></li>
              <li><Link to="/products/perfboard">Perfboard</Link></li>
              <li><Link to="/products/industrial-automation">Industrial Automation</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Open Source</h4>
            <ul className="footer-links">
              <li><Link to="/open-source">All Projects</Link></li>
              <li><a href="https://github.com/ideanix" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><Link to="/open-source#logdoc-oss">LogDoc OSS</Link></li>
              <li><Link to="/open-source#xk6-extensions">xk6 Extensions</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+18054986878">+1 (805) 498-6878</a>
              </li>
              <li>
                <a href="mailto:hello@ideanix.org">hello@ideanix.org</a>
              </li>
              <li style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: 'var(--fs-xs)' }}>
                10 Kunayeva Street<br />
                Emerald Tower, 3rd Floor<br />
                Astana, Kazakhstan 010000
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/legal/privacy">Privacy Policy</Link>
            <Link to="/legal/terms">Terms of Service</Link>
            <Link to="/legal/refund">Refund Policy</Link>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Ideanix, LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
