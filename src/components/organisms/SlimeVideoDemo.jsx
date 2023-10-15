import React from 'react'
import ContentContainer from '../atoms/ContentContainer'
import { slimeRules } from '../../data/home'
function SlimeVideoDemo() {
    console.log(slimeRules)
    return (
        <div className="slime-demo-container">
            <ContentContainer className="slime-container">
                <div className="video">
                    <p>video</p>
                </div>
                <div className={'text-content'}>
                    <h2>Our Slimes Rules !</h2>
                    <div className="content">
                        {slimeRules?.map(({ title, subtitle }) => (
                            <div className="rule">
                                <h3>{title}</h3>
                                <p>{subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
            <div className="content-footer">
                <br />
            </div>
        </div>
    )
}

export default SlimeVideoDemo
