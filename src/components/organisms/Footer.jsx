import { Link } from '@nextui-org/react'
import React from 'react'
import ContentContainer from '../atoms/ContentContainer'
import { socialLinks } from '../../data/topData'

function Footer() {
    return (
        <div className="footer-container">
            <ContentContainer>
                <div className="contact">
                    <p className="title">Contact us:</p>
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
        </div>
    )
}

export default Footer