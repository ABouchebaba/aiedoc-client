import React from "react";
import { store, persistor } from "./app/Store";
import { Provider } from "react-redux";
import Navigator from "./app/navigation";
import { AppLoading } from "expo";
import { PersistGate } from "redux-persist/integration/react";

import { enableScreens } from "react-native-screens";
enableScreens(); // for performance optimization

export default class App extends React.Component {
  state = {
    isReady: false,
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error");
    console.log(error);
  }

  async load() {
    // console.log("loading...");
    // do something
    return;
  }

  render = () => {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.load}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  };
}
