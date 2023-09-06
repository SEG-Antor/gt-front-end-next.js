import React from 'react'
import Link from 'next/link'
import "./HeaderComponent.css"

const HeaderComponent = () => {
  return (
    <header>
      <div className='headerDiv'>
        <div>
          <img src="/staticImages/globalgtIcon.png" alt='global gt icon' />
          <input type='text' placeholder='search ' />
        </div>

        <div>
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