import React, { useRef, forwardRef } from 'react'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import Newsletter from '../organisms/Newsletter'
import Gallery from '../organisms/Gallery'
import TopBar from '../molecules/TopBar'
import SlimeVideoDemo from '../organisms/SlimeVideoDemo'
import Why from '../organisms/Why'
function HomePageTemplate() {
    const gallery = forwardRef(null)

    const onScroll = (section) => {
        switch (section) {
            case '#gallery':
                return scrollToSection(gallery)
            default:
                break
        }
    }

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef?.current?.offsetTop,
            behavior: 'smooth'
        })
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
