import { useState } from "react";


function App() {
      const [game, setGame] = useState({
            id: 1,
            player: {
                  name: "Bhawesh"
            }
      });

      const handleClick = () => {
            setGame({ ...game, player: { ...game.player, name: "Verma" } });
      };

      return (<>
            <p>{game.player.name}</p>
            <button type="submit" onClick={handleClick}>My button</button>
      </>
      );
}

export default App;