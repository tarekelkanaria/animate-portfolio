import { Link, NavLink } from 'react-router-dom';
import {
  FaBars,
  FaEnvelope,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import logo from '../../../assets/images/logo-k.png';
import logoSubtitle from '../../../assets/images/logok-sub.png';
import './index.scss';
import { useState } from 'react';

const SideBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <aside className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="slobodan" />
      </Link>
      <nav className={`${showNav ? 'nav-on-mob' : ''} nav-bar__menu`}>
        <NavLink
          onClick={() => setShowNav(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
          end
        >
          <FaHome fontSize="2.5rem" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          className={`${({ isActive }) =>
            isActive ? 'active' : ''} about-link`}
          to="/about"
          end
        >
          <FaUser fontSize="2.5rem" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          className={`${({ isActive }) =>
            isActive ? 'active' : ''} portfolio-link`}
          to="/portfolio"
          end
        >
          <FaFolderOpen fontSize="2.5rem" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          className={`${({ isActive }) =>
            isActive ? 'active' : ''} contact-link`}
          to="/contact"
          end
        >
          <FaEnvelope fontSize="2.5rem" />
        </NavLink>
        <GrClose
          fontSize="4rem"
          className="close-nav"
          onClick={() => setShowNav(false)}
        />
      </nav>
      <ul className={`${showNav ? 'nav-on-mob' : ''} social-links`}>
        <li>
          <a
            href="https://www.linkedin.com/in/tarek-elkanaria/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin fontSize="2.5rem" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tarekelkanaria"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub fontSize="2.5rem" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ElkanariaTarek"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter fontSize="2.5rem" />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/19365700/tarek-elkanaria"
            target="_blank"
            rel="noreferrer"
          >
            <FaStackOverflow fontSize="2.5rem" />
          </a>
        </li>
      </ul>
      <FaBars
        color="#ffd700"
        fontSize="4rem"
        className="hamburger-icon"
        onClick={() => setShowNav(true)}
      />
    </aside>
  );
};
export default SideBar;
