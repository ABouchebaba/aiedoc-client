import React from "react";
import store from "./app/store";
import { Provider } from "react-redux";
import Navigator from "./app/navigation";

export default class App extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error");
    console.log(error);
  }

  render = () => {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  };
}
