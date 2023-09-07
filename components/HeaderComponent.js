import React, { useState } from 'react'
import Link from 'next/link'
import "./HeaderComponent.css"

const HeaderComponent = () => {
  const [visible, setVisible] = useState(false)

  function handleNav(){
    setVisible(prev => !prev)
  }

  return (
    <header>
      <div className='headerDiv'>
        <div>
          <img src="/staticImages/globalgtIcon.png" alt='global gt icon' />
          <input type='text' placeholder='search ' />
        </div>

        <div >
          <Link href="/cart"> Cart</Link>
          <Link href="/account"> My Account</Link>
        </div>

      </div>

      
      <button onClick={handleNav} id='navBtn'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>

      <nav style={visible ? {display: "flex"} : {}}>
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