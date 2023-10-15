import React from 'react'

import { slimeRules } from '../../data/home'
import ContentContainer from '../atoms/ContentContainer'

function SlimeVideoDemo() {
    console.log(slimeRules)
    return (
        <div className="slime-demo-container">
            <ContentContainer className="slime-container">
                <div className="video-container">
                    <div className="video">
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                        <video
                            src="../../videos/slime.m4v"
                            width="480"
                            height="270"
                            controls="play,pause,stop"
                            autoPlay={false}
                        />
                    </div>
                </div>
                <div className="text-content">
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
