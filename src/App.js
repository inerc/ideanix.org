import React, { Component } from 'react';
import './styles/main.css';
import { Switch, Route } from 'react-router-dom';
import { routes } from './config/routes';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

export class PublicRoute extends React.Component {
  publicAccess(props) {
    const { component: Component } = this.props;
    return <Component {...props} />;
  }

  render() {
    return <Route render={props => this.publicAccess(props)} />;
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="main-content">
          <Switch>
            {routes.map((route, i) => (
              <PublicRoute key={i} {...route} />
            ))}
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
