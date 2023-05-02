import { Link, NavLink } from 'react-router-dom';
import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import logo from '../../assets/images/logo-k.png';
import logoSubtitle from '../../assets/images/logok-sub.png';
import './index.scss';

const SideBar = () => {
  return (
    <aside className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="slobodan" />
      </Link>
      <nav className="nav-bar__menu">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
          end
        >
          <FaHome fontSize="2.5rem" />
        </NavLink>
        <NavLink
          className={`${({ isActive }) =>
            isActive ? 'active' : ''} about-link`}
          to="/about"
          end
        >
          <FaUser fontSize="2.5rem" />
        </NavLink>
        <NavLink
          className={`${({ isActive }) =>
            isActive ? 'active' : ''} contact-link`}
          to="/contact"
          end
        >
          <FaEnvelope fontSize="2.5rem" />
        </NavLink>
      </nav>
      <ul className="social-links">
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
    </aside>
  );
};
export default SideBar;
