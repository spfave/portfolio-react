import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
// import { About, Portfolio, Contact, Skills } from './pages';
import { pages } from './pages';

export default function PortfolioSite() {
  const [page, setPage] = useState('About');
  const handlePageSelection = (pageName) => setPage(pageName);
  const renderContent = () => pages[page];

  return (
    <div>
      <Header page={page} handlePageSelection={handlePageSelection} />
      {renderContent()}
      <Footer />
    </div>
  );
}
