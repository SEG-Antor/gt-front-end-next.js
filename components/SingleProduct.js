import React from 'react'
import "./singleproduct.css"
import Link from 'next/link'

const SingleProduct = ({image, description}) => {
  return (
    <div className='single-product'>
        <div className='sticker'>
            <img src="/logos/product-label.png" alt='product sticker' />
            <small>UP TO <br></br> 3.23% <br></br> OFF</small>
        </div>
        
        <img className='product-image' src={image} alt='product image'></img>

        <img src="/logos/apple.png" alt='product company ' />

        <p>{description}</p>

        <div>
            <button> ADD TO CART</button>
            <button> BUY NOW </button>
        </div>
    </div>
  )
}

export default SingleProduct