import React, { forwardRef } from 'react'
import ContentContainer from '../atoms/ContentContainer'
function Gallery({ ref }) {
    const gallery = forwardRef(ref)
    return (
        <div className="gallery-container" id={'gallery'} ref={gallery}>
            <ContentContainer>
                <h2>Gallery</h2>
                <p>
                    Explore list of our previous creations and get inspired for your unique
                    creation.
                </p>
            </ContentContainer>
        </div>
    )
}

export default Gallery
