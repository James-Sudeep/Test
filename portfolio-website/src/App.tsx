import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedSection from './components/AnimatedSection';
import './styles/main.css';
import './styles/animations.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatedSection>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatedSection>
        <Footer />
      </div>
    </Router>
  );
};

export default App;