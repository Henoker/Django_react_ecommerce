import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Importing necessary components from 'react-router-dom' for routing.
// import Home from './view/shop/Home';
// import StoreHeader from './view/base/StoreHeader';
// import StoreFooter from './view/base/StoreFooter';
// import Cart from './view/shop/Cart';
// import Checkout from './view/shop/Checkout';
// import PaymentSuccess from './view/shop/PaymentSuccess';
// import ProductDetail from './view/shop/ProductDetail';
// import Register from './view/auth/Register';
import Login from './view/auth/Login';
// import CreatePassword from './view/auth/CreatePassword';
// import ForgotPassword from './view/auth/ForgotPassword';
// import Logout from './view/auth/Logout';
// import Shipping from './view/shop/Shipping';
// import Invoice from './view/shop/Invoice';
// import Account from './view/customer/Account';
// import Orders from './view/customer/Orders';
// import OrderDetail from './view/customer/OrderDetail';
// import Notifications from './view/customer/Notifications';
// import Settings from './view/customer/Settings';
// import Wishlist from './view/customer/Wishlist';


function App() {

  return (
    <>
      <BrowserRouter>
        {/* <StoreHeader /> */}
        <Routes>
          {/* Authentication Routes */}

          {/* <Route path="/register/" element={<Register />} /> */}
          <Route path="/login/" element={<Login />} />
          {/* <Route path="/logout/" element={<Logout />} />
          <Route path="/create-password/" element={<CreatePassword />} />
          <Route path="/forgot-password/" element={<ForgotPassword />} /> */}

          {/* Store Routes */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/detail/:slug/" element={<ProductDetail />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/shipping/" element={<Shipping />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/success/" element={<PaymentSuccess />} />
          <Route path="/invoice/:order_oid/" element={<Invoice />} /> */}

          {/* Buyer Routes */}
          {/* <Route path="/customer/account/" element={<Account />} />
          <Route path="/customer/orders/" element={<Orders />} />
          <Route path="/customer/order/detail/:order_oid/" element={<OrderDetail />} />
          <Route path="/customer/wishlist/" element={<Wishlist />} />
          <Route path="/customer/notifications/" element={<Notifications />} />
          <Route path="/customer/settings/" element={<Settings />} /> */}

        </Routes>
        {/* <StoreFooter /> */}
      </BrowserRouter>
    </>
  )
}

export default App