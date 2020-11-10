import React from 'react';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
