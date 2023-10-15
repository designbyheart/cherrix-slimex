import { Link } from '@nextui-org/react'
import React from 'react'

const PrimaryButton = ({ children, url, hasBorder = true, fontSize = '1.5rem', onPress }) => (
    <Link
        to={url}
        className={'button primary'}
        onPress={() => onPress(url)}
        hasBorder={hasBorder}
        fontSize={fontSize}>
        {children}
    </Link>
)

export default PrimaryButton
