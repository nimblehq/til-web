import { useState } from 'react';

import Link from 'next/link';

import IconArrow from 'assets/icons/icon-arrow.svg';
import IconLogo from 'assets/icons/logo.svg';

const categories = [
  { name: 'All', href: '/' },
  { name: 'Web', href: '/tags/web' },
  { name: 'Mobile', href: '/tags/mobile' },
  { name: 'Design', href: '/tags/design' },
  { name: 'Product', href: '/tags/product' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <nav
        className={`app-navigation-bar navbar ${
          isMenuOpen ? 'app-navigation-bar--menu-open' : ''
        }`}
      >
        <Link href="/" passHref>
          <a
            href="/"
            className="logo link link--image navbar-brand app-header__logo"
          >
            <IconLogo className="icon logo__icon" width="132" height="32" />
            <span className="logo__text sr-only">TIL</span>
          </a>
        </Link>

        <button
          type="button"
          className="app-navigation-bar__btn-toggle-menu btn btn--chromeless"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="icon-hamburger"></i>
          <span className="sr-only">Toggle Menu</span>
        </button>

        <nav className="app-navigation-bar__navigation">
          <ul className="app-header__menu list--unstyled">
            {categories.map((category) => (
              <li key={category.name} className="app-header__menu-item">
                <Link href={category.href} passHref>
                  <a
                    className="app-header__menu-link link"
                    href={category.href}
                  >
                    {category.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="https://nimblehq.co/" passHref>
            <a
              href="https://nimblehq.co/"
              className="app-header__btn-home btn btn--link"
            >
              <span>nimblehq.co</span>
              <IconArrow className="icon icon--xs" />
            </a>
          </Link>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
