import React from "react";
import { Provider } from "react-redux";

import { store } from "./store/configureStore";
import Characters from "./common/Characters/Characters";
import Search from "./common/Search/Search";
import "./styles.scss";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
        <Characters />
      </div>
    </Provider>
  );
};

export default App;
