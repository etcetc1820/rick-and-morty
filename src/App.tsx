import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import Characters from "./common/Characters/Characters";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Characters/>
      </div>
    </Provider>
  );
}

export default App;
