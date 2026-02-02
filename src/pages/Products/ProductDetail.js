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
                  {product.hasTrial ? 'Trial version available' : 'Free trial available'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.downloads && (
        <section className="section download-section" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <h2 className="section-title text-center mb-lg">Download</h2>
            <p className="section-subtitle text-center mb-xl">
              {product.hasTrial ? 'Download the trial version for your platform' : 'Download for your platform'}
            </p>
            <div className="download-buttons">
              {product.downloads.windows && (
                <a href={product.downloads.windows} className="download-btn download-btn-windows" download>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                  <span>
                    <strong>Windows</strong>
                    <small>64-bit (x86_64)</small>
                  </span>
                </a>
              )}
              {product.downloads.linux && (
                <a href={product.downloads.linux} className="download-btn download-btn-linux" download>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.166-.334.198-.654a.14.14 0 00-.02-.104.252.252 0 00-.056-.063c-.063-.036-.129-.06-.214-.06-.078 0-.201.037-.201.037-.02-.128-.043-.2-.043-.2-.028-.1-.073-.2-.118-.278-.147-.27-.343-.47-.593-.594-.264-.134-.525-.157-.79-.058-.245.099-.457.254-.636.429a2.482 2.482 0 00-.321.375 1.01 1.01 0 00-.082.182c-.02.02-.048.039-.066.066-.023.025-.023.05-.023.075 0 .02.02.044.02.069a.4.4 0 00.016.088c.003.02.01.04.01.063.025.105.058.193.1.27l.02.05a.86.86 0 00.127.199c.047.058.098.091.142.133a.958.958 0 00.166.117c.02.013.04.02.059.033.045.025.091.042.14.063.025.012.052.018.078.027.045.015.09.03.137.036.017.003.032.01.05.012a.4.4 0 00.076.006.86.86 0 00.204-.023c.078-.016.147-.048.22-.074l.006.005c.166.09.263.166.422.334.166.164.347.393.45.69.147.403.13.858-.063 1.467-.192.616-.447 1.047-.644 1.334a4.696 4.696 0 01-.206.269 1.855 1.855 0 00-.09-.075.086.086 0 00-.016-.025c-.2-.198-.467-.395-.71-.598a4.89 4.89 0 01-.37-.314c-.032-.035-.065-.065-.097-.1l-.002.002c-.096-.105-.178-.176-.27-.298l-.018-.017c-.14-.147-.263-.334-.397-.533a3.01 3.01 0 01-.174-.336c-.095-.2-.176-.397-.237-.597l-.077-.25a.96.96 0 01-.025-.093c-.02-.076-.035-.15-.05-.22l-.02-.14c-.003-.039-.004-.079-.004-.118v-.021c-.002-.05-.002-.099-.002-.149 0-.1.002-.197.004-.296.004-.107.01-.215.02-.323.022-.205.055-.414.1-.617.078-.35.186-.683.323-.994.066-.152.14-.299.222-.44l.098-.174c.09-.147.186-.293.29-.434.095-.129.2-.256.314-.378l.094-.095c.146-.144.306-.276.479-.395.066-.045.134-.082.203-.12.036-.018.073-.04.11-.056.152-.08.31-.131.47-.159a.904.904 0 01.25-.023z"/>
                  </svg>
                  <span>
                    <strong>Linux</strong>
                    <small>64-bit (x86_64)</small>
                  </span>
                </a>
              )}
              {product.downloads.macosIntel && (
                <a href={product.downloads.macosIntel} className="download-btn download-btn-macos" download>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>
                    <strong>macOS Intel</strong>
                    <small>64-bit (x86_64)</small>
                  </span>
                </a>
              )}
              {product.downloads.macosArm && (
                <a href={product.downloads.macosArm} className="download-btn download-btn-macos" download>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>
                    <strong>macOS Apple Silicon</strong>
                    <small>ARM64 (M1/M2/M3)</small>
                  </span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {product.video && (
        <section className="section video-section">
          <div className="container">
            <h2 className="section-title text-center mb-lg">Video Tutorial</h2>
            <p className="section-subtitle text-center mb-xl">{product.video.title}</p>
            <div className="video-container">
              <video
                controls
                poster={product.video.poster || undefined}
                preload="metadata"
              >
                <source src={product.video.src} type="video/mp4" />
                <source src={product.video.src} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      )}

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
