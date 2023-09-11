"use client"
import SingleCatagory from '@/components/Catagory'
// import axiosInstance from '@/utilities/axiosInstance'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'



const AllCatagories = () => {
  const [allCatagories, setCatagories] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(()=>{
    axios.get("/api/catagory").then(result => setCatagories(result.data))
  }, [, update])


  return (
    <div>
      {allCatagories.map(catagory => {
        return <SingleCatagory  key={catagory._id} catagory={catagory} setUpdate={setUpdate}></SingleCatagory>
      })}

    </div>
  )
}

export default AllCatagories