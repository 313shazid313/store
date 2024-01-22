import NavBar from "../components/navbar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buy from '../work/Buy.jsx'
import Catagory from "../work/Catagory.jsx";
import Items from '../work/Items.jsx'
import { ShoppingCart } from "../work/ShoppingCart.jsx";
import LogSin from '../work/LogSin.jsx'


function App() {
    return (
        <>

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Buy />} />
                    <Route path='/groceries' element={<Catagory product_type="groceries" />} />
                    <Route path='/fruits' element={<Catagory product_type="fruits" />} />
                    <Route path='/vegetables' element={<Catagory peoduct_type="vegetables" />} />
                    <Route path="/items" element={<Items />}>
                        <Route path=":ItemID" element={<Items />} />
                    </Route>
                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="/login" element={<LogSin />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;
