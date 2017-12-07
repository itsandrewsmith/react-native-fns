import NetInfo, { withNetInfo } from "./NetInfo";
import AppState, { withAppState } from "./AppState";
import Geolocation, { withGeolocation } from "./Geolocation";

import React from "react";
import PropTypes from "prop-types";

const contextName = "__REACT_NATIVE_FNS__";

class Provider extends React.Component {
  static Renderer = class extends React.Component {
    static childContextTypes = {
      [contextName]: PropTypes.object.isRequired
    };

    getChildContext() {
      const { children, ...otherProps } = this.props;
      return {
        [contextName]: { ...otherProps }
      };
    }

    render() {
      return this.props.children;
    }
  };

  render() {
    const { children } = this.props;
    return (
      <AppState
        render={appState => (
          <NetInfo
            render={connectionInfo => (
              <Geolocation
                render={geolocation => (
                  <Provider.Renderer
                    appState={appState}
                    connectionInfo={connectionInfo}
                    geolocation={geolocation}
                    children={children}
                  />
                )}
              />
            )}
          />
        )}
      />
    );
  }
}

function Connected(props, context) {
  return props.render(context[contextName]);
}

Connected.contextTypes = {
  [contextName]: PropTypes.object.isRequired,
}

export {
  NetInfo,
  withNetInfo,
  AppState,
  withAppState,
  Geolocation,
  withGeolocation,
  Provider,
  Connected,
};

