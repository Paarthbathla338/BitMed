import React from 'react'
import "./Home.css"
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <a href="https://www.cowin.gov.in/" target="_blank" rel="noreferrer"><img className="home_image" src="https://images.indianexpress.com/2021/02/vaccine-8.jpg" alt="" /></a>

            </div>
            
            <div className="home_main">
            <p className="ap py-5">OUR PRODUCTS,</p>


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

export default Home
