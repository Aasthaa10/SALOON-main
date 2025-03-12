import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'

const GalleryImages = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>

        <div>
            <Gallery/>
        </div>

        <div>
            <Footer/>
        </div>
        </>
    )
}

export default GalleryImages