import React from 'react'

interface NavBarProps {
    itemsCount: number;
}

const NavBar = ({ itemsCount }: NavBarProps) => {
    return (
        <div>Items Count {itemsCount}</div>
    )
}

export default NavBar