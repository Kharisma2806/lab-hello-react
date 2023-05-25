//import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Section from "./components/Section";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
    <Navbar />
    <header>
				<Header />
			</header>

			<Section>
				<Card imgUrl={icon1} title='Declarative' text='React makes it painless to create interactive UIs.'/>
				<Card imgUrl={icon2} title='Components' text='Build encapsulated components that manage their state.'/>
				<Card imgUrl={icon3} title='Single-Way' text="A set of immutable values are passed to the component's."/>
				<Card imgUrl={icon4} title='JSX' text='Statically-typed, designed to run on modern browsers.'/>
			</Section>
    </div>
  );
}

export default App;
