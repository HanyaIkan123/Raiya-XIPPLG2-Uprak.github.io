import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState, useEffect } from "react";
import Card from './components/Card.jsx'
import Footer from "./components/Footer.jsx";


const App = () => {
  const [Api, setApi] = useState([])
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((data) => setApi(data))
    }, [])
  
  return ( 
    <div className="bg-slate-50">
      <Navbar/>
      <Hero/>
      <div className="w-full px-85 h-full grid grid-cols-3 gap-3 bg-slate-50">

        {Api.map((item) => (
          <Card key={item} title={item.title} body={item.body} id={item.id}/>
        ))}
          
      </div>
      <Footer/>
    </div>
    
   );
}
 
export default App;