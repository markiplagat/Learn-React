import './App.css';
import EventBind from './components/EventBind'
import Counter from './components/Counter'
import Message from './components/Message'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import ClickOutside from './components/ClickOutside';
import StylingBasics from './components/StylingBasics';
import FormHandling from './components/FormHandling';

function App() {
  return (
    <div className="App">
    <StylingBasics />
    <Counter />
    <Message />
    <Greet name="Mark" heroName="oj" />
    <Welcome />
    <FormHandling />
    {/* <EventBind /> */}
    {/* <ClickOutside /> */}
    </div>
  );
}

export default App;
