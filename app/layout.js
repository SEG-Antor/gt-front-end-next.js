"use client"
// bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from '@/components/HeaderComponent'
import './globals.css'
import { Inter } from 'next/font/google'
import MyFooter from '@/components/MyFooter'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <HeaderComponent></HeaderComponent>
        {children}

        <MyFooter></MyFooter>
      </body>
    </html>
  )
}
