import { Image, Link } from '@nextui-org/react'
import { StaticImage } from 'gatsby-plugin-image'
import React, { forwardRef } from 'react'

import items from '../../data/galleryData'
import ContentContainer from '../atoms/ContentContainer'
import PrimaryButton from '../atoms/PrimaryButton'

function Gallery({ ref }) {
    const gallery = forwardRef(ref)
    return (
        <div className="gallery-container" id="gallery" ref={gallery}>
            <ContentContainer className="gallery-content">
                <h3>Gallery</h3>
                <div className="gallery-top">
                    <p>
                        Explore list of our previous creations and get inspired for your unique
                        creation.
                    </p>
                    <PrimaryButton>View All</PrimaryButton>
                </div>
                <div className="gallery-items">
                    {items.map((item) => {
                        return (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link key={item.image} href="#" className="gallery-item">
                                {/* <Image src={`/images/${item.image}`} /> */}
                                <StaticImage alt={item.title} src={`/images/${item.image}`} />
                                sdfsd
                            </Link>
                        )
                    })}
                </div>
            </ContentContainer>
        </div>
    )
}

export default Gallery
