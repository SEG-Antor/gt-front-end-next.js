"use client"

import Link from 'next/link'
import "./landingpage.css"
import SingleProduct from '@/components/SingleProduct'

export default function Home() {
  return (
    <main>
      {/* <p>under here comes the admin page</p>
      <hr></hr>
      <Link href="admin-secret"> Go to admin secret</Link> */}

      <img className='w-full' src='/staticImages/banner.png' alt='banner' />

      <div className='logos'>
        <div>
          <img src="/logos/warrenty.png" alt='warrenty' />
          <span> 1 Year Warrenty</span>
        </div>

        <div>
          <img src="/logos/giftcard.png" alt='giftcard' />
          <span> GT Gift Card</span>
        </div>

        <div>
          <img src="/logos/fastdelivery.png" alt='fastdelivery' />
          <span> Fast Delivery</span>
        </div>

        <div>
          <img src="/logos/trustedseller.png" alt='trustedseller' />
          <span> Trusted Seller</span>
        </div>

        <div>
          <img src="/logos/klarna.png" alt='klarna' />
          <span> Payment Plan</span>
        </div>

        <div>
          <img src="/logos/return.png" alt='return' />
          <span> 30 Days Return</span>
        </div>
      </div>

      <Link href="top-seller">
        <img className='banner-2' src="/staticImages/second-banner.png" alt="second banner" />
      </Link>

      <div className='pre-and-refub'>
        <Link href="pre-owned"> PRE-OWNED</Link>
        <Link href="refubrished"> REFUBRISHED</Link>
      </div>


      <div className='products'>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
        <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
      </div>


      <button className='see-more'> See More</button>
    </main>
  )
}
