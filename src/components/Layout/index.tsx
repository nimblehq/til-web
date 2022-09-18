import Footer from 'components/Footer';
import Header from 'components/Header';
import RandomButton from 'components/Post/RandomButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="app-content">{children}</main>
      <RandomButton />
      <Footer />
    </>
  );
};

export default Layout;
