import React from 'react'
import Product from "./Product.js"
import "./Home2.css"

function Home2() {
    return (
        <div className="home_main">

        <p className="ap"><h2>LAB TESTS</h2></p>

        <div className="home2">
             <div className="home_row">
            <Product title="Paracetamol 500mg Tablets(Each tablet contains Paracetamol 500 mg.)" price="72" image="https://media.istockphoto.com/photos/packet-of-generic-paracetamol-tablets-picture-id1022216070?k=6&m=1022216070&s=612x612&w=0&h=dKRICd0TkhnikMaw23rPI5QvwmmCrFdcJ2uYuwhP8Cg="/>
            <Product/>
            <Product/>
            <Product/>
   


        </div>
        
        <div className="home_row">
            <Product/>
            <Product/>
            <Product/>
            <Product/>

        </div>
        </div>

        </div>
        
    )
}

export default Home2
