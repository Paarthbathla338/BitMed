import React from 'react'
import "./Mission.css"

function Mission() {
    return (
        <div className="mission">
            <h1 className="title">
                Mission Statement
            </h1>

            <p className="statement">            Welcome to BitMed, BitMed was primarily formed by Paarth Bathla for the primal reason of making healthcare more accesible and free. BitMed makes Healthcare more Accessible especially to rural regions by providing Medicines for Free and Cutting down on the Transporation and general access to Dispenseries and Clinics. While Initially Forming this app, I only had the basic idea to cut down upon Healthcare Expenditures for a family who suffers to bring food on the table for even twice a day keeping in mind the Coronavirus Pandemic. As we Started Building the Web Application the view got clearer and I innovated to integrate cryptocurrency with the Application using Coinbase Commerce API which wil primarily used for donations to the NGOs. The Application is Built using Javascript, React(A Javascript Framework), HTML and CSS.The Authentication and the Database is handled using Firebase.To Honor the Software Design Principles, the React Components have been Reused throughout the Application. It has been hardcoded to provide a MVP product to present before the judges. In case you wonder about the future viability of the idea in financial terms I intend to add advertisement as a revenue for running the app. Regardless, Monetization was never the priority. It solves a Very Basic yet unsolved and Complex Issue faced by the mass around the world by connecting the consumer and retailer using an Online Medium. A few of its Feature include Dynamic Update of the Cart, Product Styling, User Authentication and Crypto Integration.</p>

            <a href="https://github.com/Paarthbathla338/BitMed" ><h2 className="gh">Github Repository/Source Code</h2></a>


        </div>
    )
}

export default Mission
