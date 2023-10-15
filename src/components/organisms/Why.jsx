import React from 'react'
import ContentContainer from '../atoms/ContentContainer'
import { aboutUsData } from '../../data/home'
function Why() {
    return (
        <div className="why-container">
            <ContentContainer className={'about-content'}>
                <p>About us</p>
                <h2>Why Choose Our Slimes ?</h2>

                <div className="data-container">
                    {aboutUsData.map((data) => (
                        <div className={'about-us-item'} key={data.title}>
                            <h3>{data.title}</h3>
                            <p>{data.desc}</p>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </div>
    )
}

export default Why
