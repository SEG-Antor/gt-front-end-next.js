"use client"

import Link from 'next/link'
import React from 'react'
import { styled } from 'styled-components'

const AdminNav = styled.nav`
    background: black;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    flex-wrap: wrap;
`

const Layout = ({children}) => {
  return (
    <div>
         <AdminNav>
            <Link href="/admin-secret"> Admin home</Link>
            <Link href="/admin-secret/catagory"> catagory</Link>
            <Link href="/admin-secret/products">All products</Link>
            <Link href="/admin-secret/add-product"> Add product</Link>
        </AdminNav>

        <div>
            {children}
        </div>

    </div>
  )
}

export default Layout