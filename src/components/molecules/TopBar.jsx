import React from 'react'
import ContentContainer from '../atoms/ContentContainer'
import { socialLinks, barItems } from '../../data/topData'
import { Link } from '@nextui-org/react'

function TopBar() {
    return (
        <div className="top-bar-container">
            <ContentContainer className="topbar-content">
                <div className="left">
                    {barItems.map((item) => (
                        <Link href={item.url}>{item.title}</Link>
                    ))}
                </div>
                <div className={'social-links'}>
                    <p>Follow us: </p>
                    <div class="links">
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

export default TopBar
