import Head from 'next/head';

import styles from './index.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>TIL</title>
        <meta name="description" content="What Nimble has learned today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};

export default Layout;
