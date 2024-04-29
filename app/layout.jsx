import React from "react";
import '@/assets/styles/globals.css';

export const metadata={
    title:'PropertyPulse | Find the Perfect Rental',
    description:'Find your dream rental property',
    keywords:'rental, find rentals, find properties'
}
const MainLayout = ({children}) => {
   
  return (
    <html>
        <body lang="en">
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout

