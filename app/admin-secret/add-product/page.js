"use client"
import ImagesForCatagory from '@/components/ImagesForCatagory'
import ProductForm from '@/components/ProductForm'
import axiosInstance from '@/utilities/axiosInstance'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
  margin: 1rem;

  h3{
    text-align: center;
    font-size: 1.5rem;
  }

`

const SingleProduct = () => {
  const [allCatagories, setCatagories] = useState([])
  const [product, setProduct] = useState({parentCatagory:"", image:"", description:"", storage:"", color:"", price:"", originalPrice:"", reviewScore:"", peopleReviewed:"", condition:"", color:{name: "", value: ""}})
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState()

  console.log(images)

  useEffect(() => {
    axiosInstance.get("allparentscatagories")
      .then(result => setCatagories(result.data))
      .catch(error => console.log(error))
  }, [])

  function handleSubmit (e) {
    e.preventDefault()
    
    axiosInstance.post("addsingleproduct", product )
    .then(res => setProduct({parentCatagory:"", description:"", storage:"", color:"", price:"", originalPrice:"", reviewScore:"", peopleReviewed:"", condition:"", color:{name: "", value: ""}}))
    .catch(error => alert("error happened !!"))
  }

  return (
    <StyledDiv>
      <h3>Add a product</h3>

      {images.map((image, ind) => {
        return <div key={ind}>
          <img src={image?.url} alt='product image'/>
        </div>
      })}

      <ProductForm setImages={setImages} allCatagories={allCatagories}  handleSubmit={handleSubmit} product={product} setProduct={setProduct}/>

    </StyledDiv >
  )
}

export default SingleProduct