import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
//named export
// import {Greet} from './components/Greet';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

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
      
      <FunctionClick></FunctionClick>
      
      <ClassClick></ClassClick>

      <EventBind></EventBind>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <Stylesheet primary={false}></Stylesheet>
      <Inline></Inline>
    </div>
  );
}
export default App;