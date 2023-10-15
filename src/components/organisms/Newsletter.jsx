import { Image } from '@nextui-org/react'
import React from 'react'

import ContentContainer from '../atoms/ContentContainer'

function Newsletter() {
    return (
        <div className="newsletter-container">
            <ContentContainer className="newsletter-content">
                <h3>Ready to Dive into the World of Slime?</h3>
                <p>
                    Explore our Etsy shop now and discover the magic of handcrafted slimes. Perfect
                    as gifts, party favors, or just a treat for your kiddo. Let their imagination
                    run wild with our unique, themed slimes.
                </p>
                <p className="action-title">Join the Slime Revolution and Make Playtime Magical!</p>
                <form action="#">
                    <input type="email" placeholder="Enter your email address" />
                    <button type="submit" className="button primary">
                        Subscribe
                    </button>
                </form>

                <Image src="/images/etsy-logo.png" className="etsy" alt="subscribe" />
            </ContentContainer>
        </div>
    )
}

export default Newsletter
