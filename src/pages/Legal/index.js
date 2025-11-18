import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Legal = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    if (path === '/legal/privacy') {
      return <PrivacyPolicy />;
    } else if (path === '/legal/terms') {
      return <TermsOfService />;
    } else if (path === '/legal/refund') {
      return <RefundPolicy />;
    } else {
      return <LegalIndex />;
    }
  };

  return (
    <div className="legal-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Legal</h1>
          <p className="hero-subtitle">
            Our policies and terms of service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {renderContent()}
        </div>
      </section>
    </div>
  );
};

const LegalIndex = () => (
  <div className="grid grid-3">
    <Link to="/legal/privacy" className="card" style={{ textDecoration: 'none' }}>
      <h3 className="card-title">Privacy Policy</h3>
      <p className="card-description">
        How we collect, use, and protect your personal information.
      </p>
    </Link>
    <Link to="/legal/terms" className="card" style={{ textDecoration: 'none' }}>
      <h3 className="card-title">Terms of Service</h3>
      <p className="card-description">
        The terms and conditions for using our services.
      </p>
    </Link>
    <Link to="/legal/refund" className="card" style={{ textDecoration: 'none' }}>
      <h3 className="card-title">Refund Policy</h3>
      <p className="card-description">
        Our policy on refunds and cancellations.
      </p>
    </Link>
  </div>
);

const PrivacyPolicy = () => (
  <div className="container-narrow">
    <h2 style={{ marginBottom: 'var(--space-lg)' }}>Privacy Policy</h2>
    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
      <em>Last updated: {new Date().toLocaleDateString()}</em>
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>1. Information We Collect</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      We collect information you provide directly to us, such as when you create an account,
      make a purchase, or contact us for support. This may include your name, email address,
      company name, and payment information.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>2. How We Use Your Information</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      We use the information we collect to provide, maintain, and improve our services,
      process transactions, send you technical notices and support messages, and respond
      to your comments and questions.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>3. Data Security</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      We take reasonable measures to help protect your personal information from loss, theft,
      misuse, and unauthorized access. All data is encrypted in transit and at rest.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>4. Contact Us</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
      If you have any questions about this Privacy Policy, please contact us at:<br />
      <a href="mailto:privacy@ideanix.org">privacy@ideanix.org</a><br /><br />
      Ideanix, LLC<br />
      10 Kunayeva Street, Emerald Tower, 3rd Floor<br />
      Astana, Kazakhstan 010000
    </p>
  </div>
);

const TermsOfService = () => (
  <div className="container-narrow">
    <h2 style={{ marginBottom: 'var(--space-lg)' }}>Terms of Service</h2>
    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
      <em>Last updated: {new Date().toLocaleDateString()}</em>
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>1. Acceptance of Terms</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      By accessing or using the Ideanix services, you agree to be bound by these Terms of Service.
      If you do not agree to these terms, please do not use our services.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>2. Use of Services</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      You agree to use our services only for lawful purposes and in accordance with these Terms.
      You are responsible for maintaining the confidentiality of your account credentials.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>3. Intellectual Property</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      The Ideanix services and their original content, features, and functionality are owned by
      Ideanix, LLC and are protected by international copyright, trademark, and other intellectual
      property laws.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>4. Limitation of Liability</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      Ideanix, LLC shall not be liable for any indirect, incidental, special, consequential, or
      punitive damages resulting from your use of or inability to use the services.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>5. Contact</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
      For questions about these Terms, contact us at:<br />
      <a href="mailto:legal@ideanix.org">legal@ideanix.org</a>
    </p>
  </div>
);

const RefundPolicy = () => (
  <div className="container-narrow">
    <h2 style={{ marginBottom: 'var(--space-lg)' }}>Refund & Cancellation Policy</h2>
    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
      <em>Last updated: {new Date().toLocaleDateString()}</em>
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>1. Subscription Services</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      You may cancel your subscription at any time. Upon cancellation, you will continue to have
      access to the service until the end of your current billing period. We do not provide
      prorated refunds for partial months.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>2. Refund Requests</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      If you are not satisfied with our services, you may request a refund within 14 days of
      your initial purchase. Refund requests should be sent to billing@ideanix.org with your
      order details and reason for the refund.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>3. Engineering Services</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
      For custom engineering projects, refund eligibility depends on the project stage and
      deliverables completed. Please refer to your service agreement for specific terms.
    </p>

    <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>4. Contact</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
      For billing questions or refund requests, contact us at:<br />
      <a href="mailto:billing@ideanix.org">billing@ideanix.org</a>
    </p>
  </div>
);

export default Legal;
