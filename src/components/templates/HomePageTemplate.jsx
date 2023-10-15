import React, { forwardRef } from 'react'

import Footer from '../organisms/Footer'
import Gallery from '../organisms/Gallery'
import Header from '../organisms/Header'
import Newsletter from '../organisms/Newsletter'
import SlimeVideoDemo from '../organisms/SlimeVideoDemo'
import Why from '../organisms/Why'

function HomePageTemplate() {
    const gallery = forwardRef(null)

    // const scrollToSection = (elementRef) => {
    //    window.scrollTo({
    //        top: elementRef?.current?.offsetTop,
    //        behavior: 'smooth'
    //    })
    // }

    const onScroll = (section) => {
        // switch (section) {
        //    case '#gallery':
        //        return scrollToSection(gallery)
        //    default:
        //        return null
        // }
        console.log('section', section)
    }

    return (
        <div className="home-page-container">
            <Header onScroll={onScroll} />
            <Why />
            <SlimeVideoDemo />
            <Gallery ref={gallery} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default HomePageTemplate
