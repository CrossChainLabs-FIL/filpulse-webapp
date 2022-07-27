import { NavLink } from 'react-router-dom';
import s from './s.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <nav className={s.nav}>
        <span className={s.item}>
          Contact: <span className={s.contact}>team@crosschainlabs.tech</span>
        </span>
      </nav>
      <span className={s.item}>Powered by CrossChain Labs</span>
    </footer>
  );
}
