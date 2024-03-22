import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' });
  }

  render() {
    return (
      <Router>
        <div className={`App ${this.state.theme}`}>
          <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <Switch>
            <Route exact path="/" render={(props) => <MainContent {...props} theme={this.state.theme} />} />
            <Route exact path="/about" render={(props) => <About {...props} theme={this.state.theme} />} />
          </Switch>
          <Footer theme={this.state.theme} />
        </div>
      </Router>
    );
  }
}

export default App;
