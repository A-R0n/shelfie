import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name_thing: '',
            price: '',
            img: '',
            newInfo: []
    
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.addIt = this.addIt.bind(this);
        this.defaultState = this.defaultState.bind(this);
    }

 
    handleChange1(e) {
        this.setState({
            name_thing: e.target.value
        })
        // console.log(this.state.name_thing)
    }

    handleChange2(e) {
        this.setState({
            price: e.target.value
        
        })
        // console.log(this.state.price);
    }

    handleChange3(e) {
        this.setState({
            img: e.target.value
        })
        // console.log(this.state.img)
    }
    

    addIt() {
        const {name_thing, price, img} = this.state
        axios.post(`/api/things`, {name_thing: name_thing, price: price, img: img}).then(res => {
            this.setState({
                newInfo: res.data
            })
            // console.log(this.state.newInfo)
        })
    }

    defaultState() {
        this.setState({
            name_thing: '',
            price: '',
            img: ''
        })
    }

    
    render() {
    console.log(this.state)
    
        return (
            <div>
                <input type="text" value = {this.state.name_thing} placeholder="Name" onChange={(e) => this.handleChange1(e)}></input>
                <input type="text" value = {this.state.price} placeholder="Price" onChange={(e) => this.handleChange2(e)}></input>
                <input type="text" value = {this.state.img} placeholder="Image" onChange={(e) => this.handleChange3(e)}></input>
                <button onClick={this.defaultState}>Cancel</button>
                <button onClick={this.addIt}>Add to Inventory</button>    
            </div>
        )
    }
};