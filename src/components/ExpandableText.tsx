import React, { useState } from 'react'

interface ExpandableTextProps {
    children: string;
    maxChar: number;
}
const ExpandableText = ({ children, maxChar }: ExpandableTextProps) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!isExpanded);
    }

    if (children.length <= maxChar)
        return <p>{children}</p>;

    return (
        <>
            <div>
                <span>{(isExpanded) ? children.substring(0, children.length) : children.substring(0, maxChar) + '...'}</span>
                <button onClick={handleClick}>{(isExpanded) ? "Less" : "More"}</button>
            </div>
        </>
    )
}

export default ExpandableText