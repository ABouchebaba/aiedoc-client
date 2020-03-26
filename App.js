import React from "react";
import store from "./app/store";
import { Provider } from "react-redux";
import Navigator from "./app/navigation";
import { getArticles } from "./app/actions/articles";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
enableScreens(); // for performance optimization

export default class App extends React.Component {
  state = {
    isReady: false,
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error");
    console.log(error);
  }

  componentDidMount() {
    // store.dispatch(getArticles());
  }

  async load() {
    // console.log("loading...");
    return store.dispatch(getArticles());
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
        <Navigator />
      </Provider>
    );
  };
}
