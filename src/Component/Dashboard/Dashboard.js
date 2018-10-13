import React, { Component }  from 'react';
import Product from '../Product/Product';

export default function Dashboard (props) {
        var listItems = props.inventory.map((val, i) => {
            return <div key={i}>
            <p>{val.price}</p>
            <p>{val.name}</p>
            <img src={val.img}></img>
            </div>
        })
    
        return (
            <div className="listItems">
                <ul>{listItems}</ul>
                <Product />
                <Product />
                <Product />
            </div>
        )
};