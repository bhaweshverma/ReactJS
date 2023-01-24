import Message from './Message';
import ListGroup from './components/ListGroup';

function App() {
  const cities: any = ["Bengaluru", "New Delhi", "Mumbai"],
        colors: any = ["Red", "Green", "Yellow"];

  return <div>
            <ListGroup items={cities} heading='Cities'/>
            <ListGroup items={colors} heading='Colors'/>
        </div>
}

export default App;