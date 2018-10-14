import React, { Component }  from 'react';
// import Product from '../Product/Product';

const testStyle = {
    color: 'black',
    background: 'red'
};

export default function Dashboard (props) {
    // props is what im passing in from parent
        console.log(props);
    // i have to map over the array because i cant display an object on the page
    // 
    var listItems = props.inventory.map((val, i) => {
        // the key represents the particular object within the array
            return <div key={i}>
            <div class='productImage'>
                <img src={val.img}></img>
            </div>
            <p>{val.name_thing}</p>
            <p>{val.price}</p>
            </div>
        })
    
        return (
            <div className="listItems">
                <div style={testStyle}>{listItems}</div>
                {/* <Product />
                <Product />
                <Product /> */}
            </div>
        )
};