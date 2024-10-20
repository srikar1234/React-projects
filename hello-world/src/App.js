import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';

//named export
// import {Greet} from './components/Greet';

function App() {
	return (
    <div className="App">
      <Greet></Greet>
      <Welcome/>
      <Hello/>
      <Greet name="ABC" heroname="XYZ"> 
        <p>This is a chisldren tag</p>
      </Greet>
      <Greet name="DEF" heroname="UVW">
        <button>Action</button>
      </Greet>
      <Greet name="GHI" heroname="RST"></Greet>
      <Welcome name="ABC" heroname="XYZ">
        <p>This is a children tag</p>
      </Welcome>
      <Counter></Counter>
    </div>
  );
}
export default App;