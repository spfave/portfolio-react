import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { pageComponents } from './pages';

export default function PortfolioSite() {
  const pages = ['About', 'Portfolio', 'Contact', 'Skills'];

  return (
    <div>
      <BrowserRouter>
        <Header pages={pages} />
        <Switch>
          {/*Default to About page*/}
          <Route path='/' exact component={pageComponents['About']} />
          {pages.map((pageName, index) => (
            <Route
              key={index}
              path={`/${pageName.toLowerCase()}`}
              component={pageComponents[pageName]}
            />
          ))}
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
