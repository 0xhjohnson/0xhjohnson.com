import type { ReactNode } from 'react';
import Container from '@/components/container';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <Container>
        <main>{children}</main>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
