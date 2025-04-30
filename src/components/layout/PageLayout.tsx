
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-mother-light/30 to-mother-warmth/30 pt-4">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="floating-animation absolute top-20 left-10 w-10 h-10 rounded-full bg-mother-comfort opacity-20"></div>
          <div className="floating-animation absolute top-40 right-20 w-16 h-16 rounded-full bg-mother-light opacity-20 animation-delay-1000"></div>
          <div className="floating-animation absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-mother-warmth opacity-20 animation-delay-2000"></div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
