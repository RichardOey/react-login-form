import React from "react";
import MultipleLogin from "../pages/multipleLogin";

import "./styles.css";

class App extends React.Component {
  state = {
    accounts: [
      { id: 1, img_src: "./doctor.svg", desc: "Doctor" },
      { id: 2, img_src: "./patient.svg", desc: "Patient" }
    ]
  };

  render() {
    return (
      <div className="App">
        <MultipleLogin accounts={this.state.accounts} />
      </div>
    );
  }
}

export default App;
