import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Header.module.css';

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => (
  <header className={s.header}>
    <nav className={s.nav}>
      <NavLink to="/" end className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  </header>
);

export default Header;

