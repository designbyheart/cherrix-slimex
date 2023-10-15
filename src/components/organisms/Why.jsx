import React from 'react'

import { aboutUsData } from '../../data/home'
import ContentContainer from '../atoms/ContentContainer'

function Why() {
    return (
        <div className="why-container">
            <ContentContainer className="about-content">
                <p>About us</p>
                <h2>Why Choose Our Slimes ?</h2>

                <div className="data-container">
                    {aboutUsData.map((data) => (
                        <div className="about-us-item" key={data.title}>
                            <p className="title">{data.title}</p>
                            <p>{data.desc}</p>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </div>
    )
}

export default Why
