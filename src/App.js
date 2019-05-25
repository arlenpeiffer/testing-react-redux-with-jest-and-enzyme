import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Arlen",
    lName: "Peiffer",
    email: "arlenpeiffer@gmail.com",
    age: 31,
    onlineStatus: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
