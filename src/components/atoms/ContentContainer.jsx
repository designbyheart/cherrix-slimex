import React from 'react'

function ContentContainer({ children, className }) {
    return <div className={`content-container ${className}`}>{children && children}</div>
}

export default ContentContainer
