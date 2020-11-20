import React from 'react';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
