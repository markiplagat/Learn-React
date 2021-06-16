import './App.css';
import EventBind from './components/EventBind'
import Counter from './components/Counter'
import Message from './components/Message'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import ClickOutside from './components/ClickOutside';
import StylingBasics from './components/StylingBasics';
import FormHandling from './components/FormHandling';
import Mounting from './components/Mounting';
import RefDemo from './components/RefDemo';
import SayHi from './components/SayHi';

function App() {
  return (
    <div className="App">
    {/* <StylingBasics />
    <Counter />
    <Message />
    <Greet name="Mark" heroName="oj" />
    <Welcome />
    <FormHandling />
    <EventBind />
    <ClickOutside />
    <Mounting />
    <RefDemo /> */}
    <SayHi />
    </div>
  );
}

export default App;
