import { useState } from 'react'

const UpdateNestedObjectsAndArray = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Bhawesh"
        }
    });
    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ["Mushroom"]
    });

    const [cart, setCart] = useState({
        discount: .1,
        items: [
            { id: 1, title: "Product 1", quantity: 1 },
            { id: 2, title: "Product 2", quantity: 1 }
        ]
    });

    const handleClick = () => {
        setGame({ ...game, player: { ...game.player, name: "Verma" } });
        setPizza({ ...pizza, toppings: [...pizza.toppings, "New topping added"] });
        setCart({
            ...cart,
            items: cart.items.map((item) => (item.id === 1) ? { ...item, "quantity": 2 } : item)
        });
    };

    return (<>
        <p>{game.player.name}</p>
        <p>{pizza.toppings.join(' ')}</p>
        <p>{cart.items.map((i) => <p>{i.id} {i.quantity}</p>)}</p>
        <button type="submit" onClick={handleClick}>My button</button>
    </>
    );
}

export default UpdateNestedObjectsAndArray