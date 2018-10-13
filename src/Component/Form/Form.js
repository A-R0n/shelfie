import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: '',
            img: '',
            newInfo: []
    
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        // this.deleteIt = this.deleteIt.bind(this);
        this.addIt = this.addIt.bind(this);
        this.defaultState = this.defaultState.bind(this);
    }

    // componentDidMount() {
    //     axios.get('/api/things').then( results => {
    //       this.setState({
    //         everything: results.data
    //       });
    //     });
    //   }

    handleChange1(e) {
        this.setState({
            img: e.target.value
        })
        console.log(this.state.img)
    }

    handleChange2(e) {
        // console.log(e)
        this.setState({
            name: e.target.value
        
        })
        // console.log(e.target.value);
        console.log(this.state.name);
    }

    handleChange3(e) {
        this.setState({
            price: e.target.value
        })
        console.log(this.state.price)
    }
    
    // deleteIt() {
    //     // axios.delete(`/api/things/${0}`).then(res => {
    //         this.setState({
    //             name: 0,
    //             price: 0,
    //             img: 0
    //         })
    //         console.log(this.state)
    //     // })
    // }

    addIt(id) {
        console.log(id)
        axios.post(`/api/things/`, {things: id}).then(res => {
            console.log(res.data, 'FROM SERVER');
            this.setState({
                newInfo: res.data
            })
        })
    }

    defaultState() {
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }

    
    render() {
        return (
            <div>
                <input type="text" placeholder="Image URL" onChange={(e) => this.handleChange1(e)}></input>
                <input type="text" placeholder="Product Name" onChange={(e) => this.handleChange2(e)}></input>
                <input type="text" placeholder="Price" onChange={(e) => this.handleChange3(e)}></input>
                <button onClick={this.defaultStat}>Cancel</button>
                <button onClick={() => this.addIt()}>Add to Inventory</button>    
            </div>
        )
    }
};