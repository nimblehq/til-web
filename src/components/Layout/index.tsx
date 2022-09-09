interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="app-content">{children}</main>
    </>
  );
};

export default Layout;
