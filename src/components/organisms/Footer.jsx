import { Image, Link } from '@nextui-org/react'
import React from 'react'

import { socialLinks } from '../../data/topData'
import ContentContainer from '../atoms/ContentContainer'

function Footer() {
    return (
        <div className="footer-container">
            <ContentContainer className="footer-content">
                <div className="contact">
                    <p className="title">Contact us</p>
                    <p>
                        Name <br />
                        Address <br />
                        City <br />
                        State
                    </p>
                </div>
                <div className="social-links">
                    <div className="links">
                        {socialLinks.map((link) => (
                            <Link href={link.url} key={link.title}>
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </ContentContainer>
            <div className="footer-bar">
                <ContentContainer>
                    <Link href="https://etsy.com/shop/cherrixslime">
                        <Image src="/images/etsy-logo.png" alt="Etsy shop" />
                        etsy.com/shop/<strong>cherrixslime</strong>
                    </Link>
                </ContentContainer>
            </div>
        </div>
    )
}

export default Footer
