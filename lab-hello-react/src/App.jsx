//import logo from './logo.svg';
import './App.css';
import logo from './images/ironhacklogo.png';
import camo from './images/camo.png';
import tool from './images/tool.png';
import screengui from './images/screengui.png';
import desktopscreen from './images/desktopscreen.png';
import screendata from './images/screendata.png';


function App() {
  return (
    <div className="App">
      <div class="section1">
       <img src={logo} alt={logo} width="5%"/>
       <img src={camo} alt={camo} width="5%"/>
       <h1>Say Hello to ReactJS</h1>
       <p>
         You will learn how to use the most popular frontend library, and become a super Ninja developer.
       </p>
       <button> Awesome! </button>
      </div>
      <div class="section2">
        <div class="section2columns">
          <img src={tool} alt={tool} width="60%"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs. </p>
        </div>
        <div class="section2columns">
          <img src={screengui} alt={screengui} width="60%"/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div class="section2columns">
          <img src={desktopscreen} alt={desktopscreen} width="60%"/>
           <h2>Single-Way</h2>
           <p>A set of immutable values are passed to the component's. </p>
        </div>
        <div class="section2columns">
          <img src={screendata} alt={screendata} width="60%"/>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>  
      </div>  
    </div>
  );
}

export default App;
