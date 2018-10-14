import React, { Component }  from 'react';
// import Product from '../Product/Product';
import './Dashboard.css';

export default function Dashboard (props) {
    // props is what im passing in from parent
        console.log(props);
    // i have to map over the array because i cant display an object on the page
    // 
    var listItems = props.inventory.map((val, i) => {
        // the key represents the particular object within the array
            return  <div className="index" key={i}>
                            <img id="image" src={val.img}></img>
                            <span id="name">{val.name_thing}</span>
                            <span id="price">{val.price}</span>
                    </div>
        })
    
        return (
            <div className="dashboard">
                <div className="listItems">{listItems}</div>
                {/* <Product />
                <Product />
                <Product /> */}
            </div>
        )
};