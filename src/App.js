import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

class App extends Component {

  state= {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({ progress:progress});
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress} // Use this.state.progress instead of this.props.progress
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
