import Link from 'next/link';

import IconBehance from 'assets/icons/icon-behance.svg';
import IconDribbble from 'assets/icons/icon-dribbble.svg';
import IconFacebook from 'assets/icons/icon-fb.svg';
import IconGitHub from 'assets/icons/icon-github.svg';
import IconInstagram from 'assets/icons/icon-instagram.svg';
import IconLinkedIn from 'assets/icons/icon-linkedin.svg';
import IconMedium from 'assets/icons/icon-medium.svg';
import IconTwitter from 'assets/icons/icon-twitter.svg';
import IconLogo from 'assets/icons/logo.svg';

const baseUrl = 'https://nimblehq.co';
const footerMenuItems = [
  {
    title: 'Home',
    permalink: `${baseUrl}/`,
  },
  {
    title: 'Who We Are',
    permalink: `${baseUrl}/about/`,
  },
  {
    title: 'What We Build',
    permalink: `${baseUrl}/work/`,
  },
  {
    title: 'What We Do',
    permalink: `${baseUrl}/services/`,
  },
  {
    title: 'Our Handbook',
    permalink: `${baseUrl}/compass/`,
  },
  {
    title: 'Careers',
    permalink: 'https://jobs.nimblehq.co/',
    target: '_blank',
    referrer: true,
  },
  {
    title: 'Blog',
    permalink: `${baseUrl}/blog/`,
  },
];
const socialPlatforms = [
  {
    name: 'Behance',
    slug: 'behance',
    icon: IconBehance,
    permalink: 'https://www.behance.net/nimblehq',
  },
  {
    name: 'Dribbble',
    icon: IconDribbble,
    permalink: 'https://dribbble.com/nimblehq',
  },
  {
    name: 'Facebook',
    icon: IconFacebook,
    permalink: 'https://www.facebook.com/nimblehq',
  },
  {
    name: 'GitHub',
    icon: IconGitHub,
    permalink: 'https://github.com/nimblehq',
  },
  {
    name: 'Instagram',
    icon: IconInstagram,
    permalink: 'https://www.instagram.com/nimble_hq',
  },
  {
    name: 'LinkedIn',
    icon: IconLinkedIn,
    permalink: 'https://www.linkedin.com/company/nimblehq',
  },
  {
    name: 'Medium',
    icon: IconMedium,
    permalink: 'https://medium.com/nimble',
  },
  {
    name: 'Twitter',
    icon: IconTwitter,
    permalink: 'https://twitter.com/nimble_hq',
  },
];

const Footer = () => {
  return (
    <footer className="app-footer">
      <nav className="app-footer__navigation">
        <ul className="app-footer__menu list--unstyled">
          {footerMenuItems.map((item) => (
            <li key={item.title} className="app-footer__menu-item">
              <Link href={item.permalink} passHref>
                <a
                  href={item.permalink}
                  className="app-footer__menu-link link"
                  target={item.target}
                  rel={item.referrer ? 'noopener' : ''}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="app-footer__brand">
        <Link href={baseUrl} passHref>
          <a href={baseUrl} className="logo link link--image app-footer__logo">
            <IconLogo className="icon logo__icon" width="132" height="32" />
            <span className="logo__text sr-only">nimblehq.co</span>
          </a>
        </Link>

        <small className="app-footer__copyright">© 2022 Nimble</small>
      </div>

      <div className="app-footer__social">
        <ul className="list-social-platform list--unstyled">
          {socialPlatforms.map((platform) => (
            <li key={platform.name} className="list-social-platform__item">
              <Link href={platform.permalink} passHref>
                <a
                  href={platform.permalink}
                  className="list-social-platform__link link link--chromeless"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <platform.icon
                    className={`icon list-social-platform__icon icon--xs list-social-platform__icon--${platform.slug}`}
                  />
                  <span className="sr-only">{platform.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
