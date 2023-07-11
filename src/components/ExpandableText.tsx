import React, { useState } from 'react'

interface ExpandableTextProps {
    maxChar: number;
}
const ExpandableText = ({ maxChar }: ExpandableTextProps) => {
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const [lessMore, setLessMore] = useState(false);

    const handleClick = () => {
        setLessMore(!lessMore);
    }
    return (
        <>
            <div>
                <span>{(lessMore) ? text.substring(0, text.length) : text.substring(0, maxChar) + '...'}</span>
                <button onClick={handleClick}>{(lessMore) ? "Less" : "More"}</button>
            </div>
        </>
    )
}

export default ExpandableText