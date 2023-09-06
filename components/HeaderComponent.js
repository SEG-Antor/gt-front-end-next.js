import React from 'react'
import Link from 'next/link'
import { styled } from 'styled-components'

const HeaderComponent = () => {
  return (
    <header>
      <HeaderDiv >
        <div>
          <img src="/staticImages/globalgtIcon.png" alt='global gt icon' />
          <input type='text' placeholder='search ' />
        </div>

        <div>
          <Link href="/cart"> Cart</Link>
          <Link href="/account"> My Account</Link>
        </div>

      </HeaderDiv>

      <StyledNav>
        <Link href="pre-owned">PRE-OWNED</Link>
        <Link href="refubrished">REFUBRISHED</Link>
        <Link href=" whole-sale">WHOLESLE</Link>
        <Link href="resources">RESOURCES</Link>
        <Link href="contact-us">CONTACT US</Link>
        <Link href="offer">OFFER</Link>
      </StyledNav>

    </header>
  )
}

const HeaderDiv = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  background: #E5E4E2;

  div{
    display: flex;
    
  }

  img{
    width: 200px;
    height: 51px;
    margin-right: 25px;
  }

  input{
    background: white;
    width: 30vw;
    border-radius: 4px;
    padding-left: 5px;
  }

  a{
    border: 1px solid #3E3E3B;
    border-radius: 4px;
    padding: 9px 15px;
    margin-right: 16px;
    font-weight: bold;
    font-size: 17px;
    color: #249EF6;
    display: inline-block;

    box-shadow: 0 4px 4px 0 #00000038;
  }

`

const StyledNav = styled.nav`
    background: rgba(0, 132, 214, 0.2);
    padding: 15px;
    display: flex;
    justify-content: center;

    a{
      margin:0 20px;
    }

    a:last-child{
      color: rgba(242, 110, 33, 1);
    }
`

export default HeaderComponent