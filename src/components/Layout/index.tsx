import Header from 'components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="app-content">{children}</main>
    </>
  );
};

export default Layout;
