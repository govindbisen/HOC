import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ClickIncrease from './ClickIncrease';
import HoverIncrease from './HoverIncrease';


function App() {
  return (
    <div className="App">
      <ClickIncrease/>
      <HoverIncrease/>
    </div>
  );
}

export default App;
