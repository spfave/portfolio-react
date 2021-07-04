// import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { pageComponents } from './pages';

export default function PortfolioSite() {
  const pages = ['About', 'Portfolio', 'Contact', 'Skills'];
  // const [page, setPage] = useState('About');
  // const handlePageChange = (pageName) => setPage(pageName);
  // const renderContent = () => pageComponents[page];

  return (
    <div>
      <BrowserRouter>
        {/* <Header pages={pages} page={page} handlePageChange={handlePageChange} /> */}
        <Header pages={pages} />
        {/* {renderContent()} */}
        <Switch>
          {/*Default to About page*/}
          <Route path='/' exact component={pageComponents['About']} />
          {/* <Route path='/about' component={pageComponents.About} /> */}
          {/* <Route path='/portfolio' component={Portfolio} /> */}
          {pages.map((pageName, index) => (
            <Route
              key={index}
              path={`/${pageName.toLowerCase()}`}
              component={pageComponents[pageName]}
            />
          ))}
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
