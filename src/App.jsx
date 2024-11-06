import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PaymentPage from "./pages/PaymentPage"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/payment" element={<PaymentPage />}/>
        </Routes>
  </div>)
};

// export default App;
// https://github.com/Govind783/react-e-commerce-/tree/main

// import React from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// // import PaymentPage from "./pages/PaymentPage"; // Import the PaymentPage

// const App = () => {
//   return (
//     <div>
//       {/* <Router> */}
//         <div className="bg-slate-900">
//           <Navbar />
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           {/* <Route path="/payment" element={<PaymentPage />} /> */}
//         </Routes>
//       {/* </Router> */}
//     </div>
    
//   );
// };

export default App;
