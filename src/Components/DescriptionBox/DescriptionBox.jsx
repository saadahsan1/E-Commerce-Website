import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates buying 
            and selling of products or services over the internet. It 
            serves as a virtual marketplace where businesses and individuals 
            show their product, interact with customers, and conduct transactions without 
            the need of a physical presence. E-Commerce webistes have gained imense popularity due to
            convenience of accessibility, and the global reach they offer.
        </p>
        <p>E-commerce webistes typically display products or services 
            along with detailed descriptions, images, prices, and any available variations
            (e.g sizes, colors) . Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
