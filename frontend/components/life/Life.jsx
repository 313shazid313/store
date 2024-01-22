import React from 'react';
import './Life.css';
import image from '../picture/istockphoto-1261302777-1024x1024.jpg'




const Life = () => {
    return (
        <>
            <div className="life">
                <div className="left">
                    <h2>Growers</h2>
                    <div>
                        <div className="icon">
                            <p>new</p>
                           
                        </div>
                        <p>Items</p>
                        <p>Everyday</p>
                    </div>
                    <div className='btn'>
                       
                    </div>
                </div>
                <div className="right">
                    <img src={image} alt="" />
                </div>
                
            </div>
        </>
    )
}

export default Life;