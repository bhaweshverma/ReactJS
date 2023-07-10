import { useState } from "react";


function App() {
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

      const handleClick = () => {
            setGame({ ...game, player: { ...game.player, name: "Verma" } });
            setPizza({ ...pizza, toppings: [...pizza.toppings, "New topping added"] });
      };

      return (<>
            <p>{game.player.name}</p>
            <p>{pizza.toppings.join(' ')}</p>
            <button type="submit" onClick={handleClick}>My button</button>
      </>
      );
}

export default App;