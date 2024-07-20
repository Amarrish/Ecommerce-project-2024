import { Route, Routes } from 'react-router-dom'
import Navbar from '../Customer/Components/Navigation/Navbar'
import Homepage from '../Customer/Pages/Homepage/Homepage'
import Cartpage from '../Customer/Components/Cart/Cartpage'
import Product from '../Customer/Components/Product/Product'
import Productdetails from '../Customer/Components/Productdetails/Productdetails'
import Checkout from '../Customer/Components/checkout/Checkout'
import Order from '../Customer/Components/Order/Order'
import OrderDetails from '../Customer/Components/Order/OrderDetails'
import Footer from '../Customer/Components/Footer/Footer'
const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/cart' element={<Cartpage/>}/>
            <Route path='/:levelone/:leveltwo/:levelthree' element={<Product/>}/>
            <Route path='/product/:productid' element={<Productdetails/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/order' element={<Order/>}/>
            <Route path='/account/order/:orderid' element={<OrderDetails/>}/>
        </Routes>

        
    <div>
      <Footer/>
    </div>

    </div>
  )
}

export default CustomerRoutes



