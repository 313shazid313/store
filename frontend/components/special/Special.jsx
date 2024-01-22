import React from 'react';
import './special.css';


const Special = (props) => {
    return (
        <>
            <div className="field">
                <img src={props.iamge} alt="" />
                <p>{props.name}</p>
                <div className="priceN">
                    {props.new_price}
                </div>
                <div className="priceO">
                    {props.old_price}
                </div>
            </div>
        </>
    )
}

export default Special