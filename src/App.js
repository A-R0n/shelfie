import React, { Component } from 'react';
import './App.css';
import Form from './Component/Form/Form';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: []
    }

  }

  componentDidMount() {
    axios.get('/api/things').then( results => {
      console.log(results.data);
      this.setState({
        inventory: results.data
      });
    });
    console.log(this.state.inventory)

  }

  render() {
    let {inventory} = this.state;
    // console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={inventory}/>
        <Form />

      </div>
    );
  }
}

export default App;
