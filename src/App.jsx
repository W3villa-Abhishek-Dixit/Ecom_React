import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Herosec from "./Components/Herosec"
import Infosec from "./Components/Infosec"
import Feature_strip from "./Components/Feature_strip"
import Category_sec from "./Components/Category_sec"
import Product from "./Components/Product"
import FeaturedProduct_sec from "./Components/FeaturedProduct_sec"
import BrandLogo from "./Components/BrandLogo"
import Gallery from "./Components/Gallery"
import Blog from "./Components/Blog"
import Fproduct from "./Components/Fproduct"
import Review from "./Components/Review"
import Viewed from "./Components/Viewed"
import Social from "./Components/Social"
import Footer from "./Components/Footer"
import Copyright from "./Components/Copyright"
function App() {
 

  return (
    <div className="box-border w-screen p-0 m-0 min-h-screen" >
     <Navbar/>
     <Header/>
     <Infosec/>
     <Herosec/>
     <Feature_strip/>
     <Category_sec/> 
     <Product/>
      <FeaturedProduct_sec/>
     
      <Fproduct/>
      <BrandLogo/>
      <Gallery/>
      <Blog/>
      <Review/>
      <Viewed/>
      <Social/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App
