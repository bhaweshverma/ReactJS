import { MouseEvent } from "react";
import { useState } from "react";
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding:0;
`;

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0px;
    background: ${(props) => props.active ? 'blue' : 'none'}
`;

interface ListGroupWithStyledComponentProps {
    items: string[];
    heading: string;
    //(item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroupWithStyledComponent({ items, heading, onSelectItem }: ListGroupWithStyledComponentProps) {
    //use Hook - useState
    let [selectedIndex, setSelectedIndex] = useState(0);

    const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    };
    //Event Handler
    const handleClick = (event: MouseEvent) => { console.log(event); };

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <List>
                {items.map((item: any, index: number) => (<ListItem key={item} active={index === selectedIndex} onClick={() => { setSelectedIndex(index); onSelectItem(item); }}>{item}</ListItem>))}
            </List>
        </>
    );
}

export default ListGroupWithStyledComponent