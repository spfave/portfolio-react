import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { About, Portfolio, Contact, Skills } from './pages';

export default function PortfolioSite() {
  const [page, setPage] = useState('About');
  const handlePageSelection = (pageName) => setPage(pageName);
  const renderContent = () => {
    switch (page) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Skills':
        return <Skills />;
      default:
        break;
    }
  };

  return (
    <div>
      <Header page={page} handlePageSelection={handlePageSelection} />
      {renderContent()}
      <Footer />
    </div>
  );
}
