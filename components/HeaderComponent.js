import React, { useState } from 'react'
import Link from 'next/link'
import "./HeaderComponent.css"

const HeaderComponent = () => {
  function handleSearch(e){
    e.preventDefault()
    const searchValue = e.target.search.value
    e.target.search.value = ""
  }

  return (
    <header>
      <div className='headerDiv'>
        <div>
          <Link href="/" className='gtlogo'>
            <img src="/staticImages/globalgtIcon.png" alt='global gt icon' />
          </Link>

          <form className='product-search' onSubmit={handleSearch}>
            <input type='text' placeholder='product' name='search'/>
            <button type='submit'>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </button>
          </form>
        </div>

        <div >
          <Link href="/cart"> Cart</Link>
          <Link href="/account"> My Account</Link>
        </div>

      </div>

      <nav>
        <Link href="pre-owned">PRE-OWNED</Link>
        <Link href="refubrished">REFUBRISHED</Link>
        <Link href=" whole-sale">WHOLESLE</Link>
        <Link href="resources">RESOURCES</Link>
        <Link href="contact-us">CONTACT US</Link>
        <Link href="offer">OFFER</Link>
      </nav>


    </header>
  )
}


export default HeaderComponent