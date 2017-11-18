import React from "react";
import { AppState } from "react-native";

export default class AppStateFn extends React.Component {
  state = {
    appState: AppState.currentState
  };

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange = appState => this.setState({ appState });

  render() {
    if (!this.props.render) return null;
    return this.props.render(this.state);
  }
}

export const withAppState = Component => {
  return class extends React.Component {
    render() {
      return (
        <AppState
          render={({ appState }) => <Component appState={appState} />}
        />
      );
    }
  };
};
