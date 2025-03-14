
import Brands from "./components/brands";
import Footer from"./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Hero";
import Navbar from "./components/navbar";
import Product from "./components/product";
import Reviews from "./components/Reviews";
import Dressstyle from "./dressstyle";






export default function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Product/>
      <Dressstyle/>
      <Reviews/>
     <Footer/>
    </div>
  )
}