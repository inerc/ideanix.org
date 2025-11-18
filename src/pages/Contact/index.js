import React, { Component } from 'react';

// IMPORTANT: Replace YOUR_FORM_ID with your Formspree form ID
// Get it at https://formspree.io (free tier: 50 submissions/month)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/manvqwkg';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      message: '',
      submitted: false,
      submitting: false,
      error: null
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitting: true, error: null });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          company: this.state.company,
          message: this.state.message
        })
      });

      if (response.ok) {
        this.setState({ submitted: true, submitting: false });
      } else {
        const data = await response.json();
        this.setState({
          error: data.error || 'Something went wrong. Please try again.',
          submitting: false
        });
      }
    } catch (err) {
      this.setState({
        error: 'Network error. Please check your connection.',
        submitting: false
      });
    }
  };

  render() {
    const { name, email, company, message, submitted, submitting, error } = this.state;

    return (
      <div className="contact-page">
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Have a question or want to work with us?
              We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'start' }}>
              <div>
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Get in Touch</h2>

                {submitted ? (
                  <div className="card" style={{ background: 'rgba(108, 207, 142, 0.1)', border: '1px solid var(--success)' }}>
                    <h3 style={{ color: 'var(--success)', marginBottom: 'var(--space-md)' }}>
                      Thank you!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={this.handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        value={company}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={message}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    {error && (
                      <div style={{
                        background: 'rgba(224, 47, 68, 0.1)',
                        border: '1px solid var(--error)',
                        borderRadius: 'var(--radius-sm)',
                        padding: 'var(--space-md)',
                        marginBottom: 'var(--space-md)',
                        color: 'var(--error)'
                      }}>
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%' }}
                      disabled={submitting}
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              <div>
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Contact Information</h2>

                <div className="card mb-lg">
                  <h4 className="card-title">Phone</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    <a href="tel:+18054986878" style={{ color: 'var(--text-link)' }}>
                      +1 (805) 498-6878
                    </a>
                  </p>
                </div>

                <div className="card mb-lg">
                  <h4 className="card-title">Email</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    <a href="mailto:hello@ideanix.org" style={{ color: 'var(--text-link)' }}>
                      hello@ideanix.org
                    </a>
                  </p>
                </div>

                <div className="card mb-lg">
                  <h4 className="card-title">Office</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    10 Kunayeva Street<br />
                    Emerald Tower, 3rd Floor<br />
                    Astana, Kazakhstan 010000
                  </p>
                </div>

                <div className="card">
                  <h4 className="card-title">Company</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    Ideanix, LLC<br />
                    Delaware LLC<br />
                    EIN: 35-2857145
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
