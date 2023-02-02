import css from './layout.module.css';

export default function Layout({ children }) {
  return <div className={css.container}>{children}</div>;
}
