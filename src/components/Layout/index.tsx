import styles from './index.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};

export default Layout;
