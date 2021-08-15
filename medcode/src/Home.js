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
            <p className="ap py-5"><h2>MEDICINES</h2></p>


        <div className="home_row">
            <Product title="Paracetamol 500mg Tablets(Each tablet contains Paracetamol 500 mg.)"  image="https://media.istockphoto.com/photos/packet-of-generic-paracetamol-tablets-picture-id1022216070?k=6&m=1022216070&s=612x612&w=0&h=dKRICd0TkhnikMaw23rPI5QvwmmCrFdcJ2uYuwhP8Cg="/>
            <Product title="Synthroid 50Mcg Tablets (90 Tablets in Bottle) " image="https://www.verywellhealth.com/thmb/yJOxvR23Q5Amz2N88sgZIfdZiwk=/2000x1125/smart/filters:no_upscale()/GettyImages-824312418-5c1855e2c9e77c0001a97bce.jpg"/>
            <Product title="Nexium Plus Tab (10 Tablets in a Strip)" image="https://m.media-amazon.com/images/I/81MHbKaz96L._AC_SL1500_.jpg"/>
            <Product  title="Crocin 650mg Advanced Tablets (15 Tablets in a Strip)" image="https://5.imimg.com/data5/OU/XS/MY-53366293/crocin-500x500.jpg"/>
   


        </div>
        
        <div className="home_row">
            <Product  title="Benadryl cough syrup (150ml in the Syrup Bottle)" image="https://newassets.apollo247.com/pub/media/catalog/product/b/e/ben0053.jpg"/>
            <Product  title="Meftal Spas Tablet (10 Tablets in a Strip)" image="https://www.netmeds.com/images/product-v1/600x600/800636/meftal_dt_250mg_tablet_10_s_0.jpg"/>
            <Product  title="Ventolin Exhaler 100 Micrograms" image="https://5.imimg.com/data5/HQ/GM/MY-66315538/1-500x500.png"/>
            <Product  title=" Abilify 2mg (30 Tablets)" image="https://www.reliongroup.com/wp-content/uploads/2018/05/abilify-bottles.png"/>

        </div>
        
        
        

            
        </div>
        
        </div>
    )
}

export default Home
