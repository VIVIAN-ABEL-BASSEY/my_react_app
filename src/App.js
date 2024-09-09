import { useState, useEffect } from "react";
import { Route,Routes,Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
function App(){
  // window.location = "https://google.com"
  // window.location.reload()
  return(
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link> {/*<a href ="/">Home</a> */}
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              {/* Browser Router syntax: http://examole.com/Products */}
              <Link to={"/product/0"}>Products</Link> {/*this functions to equivalent to <a href ="/products">Products</a> in html*/}
            </li>
            <li>
              {/* hash Router syntax: http://examole.com/#/Services */}
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/profile/01/vian"}>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>

    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/product" element={<Product/>}/> */}
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:id/:username" element={<Profile/>}/>
      </Routes>
    </main>
    </div>
  )
}
export default App;