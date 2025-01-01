


import React, { StrictMode } from 'react'
import Header from './Header';
import BodySection from './BodySection';
import Footer from './Footer';

const Layout = () => {
  return (
    <StrictMode>

        <div className="container-fluid p-0 layout">
            <div className="row">


                {/* header */}
                <Header/>


                {/* body section  */}
                <BodySection/>


                {/* footer */}
                <Footer/>


                {/* to the top */}
                

            </div>
        </div>






    </StrictMode>
  )
}

export default Layout;