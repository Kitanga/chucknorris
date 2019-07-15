import React, { Component } from "react";
import { inject, observer } from "mobx-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Quote</h1>
        <h2>{this.props.store.quote}</h2>
        <input
          defaultValue={this.props.store.quote}
          type="text"
          onChange={event => {
            event.persist();

            var { value } = event.target;
            this.props.store.changeQuote(value);
          }}
        />
      </div>
    );
  }
}

export default inject("store")(observer(App));
