import React from "react";
import '@/assets/styles/globals.css';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export const metadata={
    title:'PropertyPulse | Find the Perfect Rental',
    description:'Find your dream rental property',
    keywords:'rental, find rentals, find properties'
}
const MainLayout = ({children}) => {
   
  return (
    <html>
        <body lang="en">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  )
}

export default MainLayout

