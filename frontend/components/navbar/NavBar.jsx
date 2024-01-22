import React, { useState } from 'react';
import '../navbar/NavBar.css';
import logo from '../picture/growers-1.svg'
import {Link} from 'react-router-dom';
import { IoMdCart } from "react-icons/io";


const NavBar = () => {
    const [nav, setNav] = useState("shop");

    return (
        <>
            <div className="nav">
                <div className="n-logo">
                    {/* <img src={logo} alt="" /> */}
                    <Link to='/'><img src={logo} alt="" /></Link>
                   {/* <Link style={{textDecoration:'none',color:"green"}} to='/'><p>Growers</p></Link>  */}
                </div>
                <div className="n-manu">
                    <li onClick={() => { setNav("shop") }}> <Link style={{textDecoration:'none',color:"green"}} to= '/'>Shop</Link> {(() => { if (nav === "shop") { return <hr />; } else { return null; } })()} </li>
                    <li onClick={() => { setNav("groceries") }}> <Link style={{textDecoration:'none',color:"green"}} to = "/groceries">Groceries</Link> {nav === "groceries" ? <hr /> : <></>}</li>
                    {/* ternary opreator er babohar */}
                    <li onClick={() => { setNav("fruits") }}> <Link style={{textDecoration:'none',color:"green"}} to="/fruits">Fruits</Link> {nav === "fruits" ? <hr/>:<></>}</li>
                    <li onClick={() => { setNav("vegetables") }}> <Link style={{textDecoration:'none',color:"green"}} to="/vegetables">Vegetables</Link> {nav ==="vegetables"?<hr/>:<></>}</li>
                </div>

                <div className="n-login">
                   <button><Link style={{textDecoration:'none',color:"green"}} to = '/login'>Login</Link></button>
                    <Link  to='/cart'><IoMdCart className='myCart' /></Link>
                    <div className="counter">
                        0
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar