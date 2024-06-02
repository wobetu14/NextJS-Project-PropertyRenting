import React from "react";
import '@/assets/styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata={
    title:'PropertyPulse | Find the Perfect Rental',
    description:'Find your dream rental property',
    keywords:'rental, find rentals, find properties'
}
const MainLayout = ({ children }) => {
   console.log("Hello world. I am Wobetu")
  return (
    <AuthProvider>
      <html>
        <body lang="en">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout

