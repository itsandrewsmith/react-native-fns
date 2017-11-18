import React from "react";

export default class Geolocation extends React.Component {
  state = {
    position: null,
    positionError: null
  };

  watchRef = null;

  componentDidMount = () => {
    const { options = {}, shouldWatch = false } = this.props;
    const method = shouldWatch ? "watchPosition" : "getCurrentPosition";

    this.watchRef = navigator.geolocation[method](
      this.onSuccess,
      this.onFail,
      options
    );
  };

  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchRef);
    navigator.geolocation.stopObserving();
  };

  onSuccess = position => this.setState({ position, positionError: null });
  onFail = positionError => this.setState({ position: null, positionError });

  render() {
    if (!this.props.render) return null;
    return this.props.render(this.state);
  }
}

export const withGeolocation = (
  Component,
  options = {},
  shouldWatch = false
) => {
  return class extends React.Component {
    render() {
      return (
        <Geolocation
          shouldWatch={shouldWatch}
          options={options}
          render={({ position, positionError }) => (
            <Component position={position} positionError={positionError} />
          )}
        />
      );
    }
  };
};
