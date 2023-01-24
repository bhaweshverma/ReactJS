import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps{
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: ListGroupProps) {
    //use Hook - useState
    let [selectedIndex, setSelectedIndex] = useState(0);

    const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    };
    //Event Handler
    const handleClick = (event: MouseEvent) => {console.log(event);};

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item: any, index:number) => (<li key={item} className={selectedIndex === index ? "active list-group-item" : "list-group-item" } onClick={()=>{setSelectedIndex(index)}}>{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;