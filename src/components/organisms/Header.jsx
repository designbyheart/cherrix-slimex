import { Link } from '@nextui-org/react'
import React from 'react'
import headerLinks from '../../data/headerData'
import ContentContainer from '../atoms/ContentContainer'
import TopBar from '../molecules/TopBar'
import PrimaryButton from '../atoms/PrimaryButton'

function Header({ onScroll }) {
    const onPress = (link) => {
        onScroll(link)
    }

    return (
        <div className="header-container" id={'home'}>
            <TopBar />
            <ContentContainer className="header-content">
                <div className="main-menu">
                    <div className="links">
                        {headerLinks.map((link) => (
                            <PrimaryButton href={link.url} onPress={() => onPress(link.url)}>
                                <span>{link.title}</span>
                            </PrimaryButton>
                        ))}
                    </div>
                </div>
                <h1>Welcome to Our Unique Slime Wonderland !</h1>
            </ContentContainer>
        </div>
    )
}

export default Header
