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
      inventory: [
        {
          name: "soap",
          price: 5,
          img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwibp4H8t4LeAhUQHqwKHYzdCucQjRx6BAgBEAU&url=https%3A%2F%2Fsites.google.com%2Fsite%2Fdiamondluxorsoap%2Fhome%2Fhistory-of-soap&psig=AOvVaw37VXHMWZLcfxuPAQA3jYEr&ust=1539486418132659'
        },
        {
          name: "tree",
          price: 1000,
          img: null
        }
      ],
    }

  }

  componentDidMount() {
    axios.get('/api/things').then( results => {
      console.log(results.data);
      this.setState({
        inventory: results.data
      });
    });

  }

  render() {
    let {inventory} = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard listItems = {this.state.inventory.name}/>
        <Form />

      </div>
    );
  }
}

export default App;
