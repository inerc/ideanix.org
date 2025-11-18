import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false
    };
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      mobileMenuOpen: !prevState.mobileMenuOpen
    }));
  };

  closeMobileMenu = () => {
    this.setState({ mobileMenuOpen: false });
  };

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="header-logo" onClick={this.closeMobileMenu}>
              Ideanix
            </Link>

            <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
              <NavLink
                to="/products"
                className="header-link"
                activeClassName="active"
                onClick={this.closeMobileMenu}
              >
                Products
              </NavLink>
              <NavLink
                to="/open-source"
                className="header-link"
                activeClassName="active"
                onClick={this.closeMobileMenu}
              >
                Open Source
              </NavLink>
              <NavLink
                to="/solutions"
                className="header-link"
                activeClassName="active"
                onClick={this.closeMobileMenu}
              >
                Solutions
              </NavLink>
              <NavLink
                to="/pricing"
                className="header-link"
                activeClassName="active"
                onClick={this.closeMobileMenu}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/blog"
                className="header-link"
                activeClassName="active"
                onClick={this.closeMobileMenu}
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className="header-link"
                activeClassName="active"
                onClick={this.closeMobileMenu}
              >
                About
              </NavLink>
            </nav>

            <div className="header-actions">
              <Link to="/contact" className="btn btn-primary btn-sm">
                Contact Us
              </Link>
              <button
                className="mobile-menu-btn"
                onClick={this.toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
