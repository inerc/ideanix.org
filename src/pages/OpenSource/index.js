import React from 'react';
import { Link } from 'react-router-dom';
import { ossProjects } from '../../data/oss-projects';

const OpenSource = () => {
  return (
    <div className="opensource-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Open Source at Ideanix</h1>
          <p className="hero-subtitle">
            We believe that transparency, community collaboration, and open standards
            accelerate innovation. Explore our open-source ecosystem.
          </p>
          <div className="hero-actions">
            <a
              href="https://github.com/ideanix"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            {ossProjects.map(project => (
              <div key={project.id} id={project.id} className="oss-card">
                <div className="oss-card-header">
                  <div>
                    <h3 className="oss-name">{project.name}</h3>
                    <div className="flex gap-sm mt-sm">
                      <span className="badge badge-success">{project.language}</span>
                      <span className="badge badge-primary">{project.stars} stars</span>
                    </div>
                  </div>
                  <span className="oss-license">{project.license}</span>
                </div>
                <p className="card-description" style={{ marginBottom: 'var(--space-md)' }}>
                  {project.description}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-md)' }}>
                  {project.longDescription}
                </p>
                <h4 style={{ fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-sm)' }}>Features:</h4>
                <ul className="feature-list mb-lg">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    GitHub
                  </a>
                  {project.relatedProduct && (
                    <Link to={`/products/${project.relatedProduct}`} className="btn btn-secondary btn-sm">
                      Related Product
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Open Source?</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h4 className="card-title">Transparency</h4>
              <p className="card-description">
                Open source builds trust. Inspect our code, understand how it works,
                and verify security.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Community</h4>
              <p className="card-description">
                Community contributions help discover edge cases and improve reliability
                for everyone.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Flexibility</h4>
              <p className="card-description">
                Modify and extend our tools to fit your exact needs.
                No vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Join the Community</h2>
          <p className="section-subtitle mb-xl">
            Star us on GitHub, report issues, contribute code, or just say hello.
          </p>
          <a
            href="https://github.com/ideanix"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            GitHub Organization
          </a>
        </div>
      </section>
    </div>
  );
};

export default OpenSource;
