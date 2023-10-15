import '../styles/app.scss'

import * as React from 'react'

import HomePageTemplate from '../components/templates/HomePageTemplate'

function IndexPage() {
    return (
        <main className="page-styles">
            <HomePageTemplate />
        </main>
    )
}

export default IndexPage

export function Head() {
    return <title>Cherrix Slimex</title>
}
