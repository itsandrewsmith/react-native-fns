import React from "react";
import { NetInfo } from "react-native";

export default class NetInfoFn extends React.Component {
  state = {
    connectionInfo: null
  };
  
  componentDidMount = () => {
    NetInfo.addEventListener("connectionChange", this.handleConnectionChange);

    NetInfo.isConnected
    .fetch()
    .then(connectionInfo => this.setState({ connectionInfo }));
  };

  componentWillUnmount = () => {
    NetInfo.removeEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
  };

  handleConnectionChange = connectionInfo => this.setState({ connectionInfo });

  render() {
    if (!this.props.render) return null;
    return this.props.render(this.state);
  }
}

export const withNetInfo = Component => {
  return class extends React.Component {
    render() {
      return (
        <NetInfo
          render={({ connectionInfo }) => (
            <Component connectionInfo={connectionInfo} />
          )}
        />
      );
    }
  };
};
