import Footer from '@/components/footer';
import NavBar from '@/components/nav-bar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
