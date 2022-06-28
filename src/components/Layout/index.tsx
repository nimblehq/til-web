import RandomButton from 'components/Post/RandomButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="container max-w-4xl mx-auto">{children}</main>
      <RandomButton />
    </>
  );
};

export default Layout;
