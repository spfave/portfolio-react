import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { pageComponents } from './pages';

export default function PortfolioSite() {
  const pages = ['About', 'Portfolio', 'Contact', 'Skills'];
  const [page, setPage] = useState('About');
  const handlePageChange = (pageName) => setPage(pageName);
  const renderContent = () => pageComponents[page];

  return (
    <div>
      <Header pages={pages} page={page} handlePageChange={handlePageChange} />
      {renderContent()}
      <Footer />
    </div>
  );
}
