import React from "react";
import "./styles/App.css";
import SearchContacts from "./components/SearchContacts";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="app-title">Gal's Yellow Pages App</h1>
        <SearchContacts />
      </div>
    </Provider>
  );
}

export default App;
