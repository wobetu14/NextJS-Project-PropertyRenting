import React from "react";
import '@/assets/styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata={
    title:'PropertyPulse | Find the Perfect Rental',
    description:'Find your dream rental property',
    keywords:'rental, find rentals, find properties'
}
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body lang="en">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout

