# react-native-fns

Inspired by the npm package react-fns: https://github.com/jaredpalmer/react-fns

Exposes React Native APIs via HoC and Render Props for consumption. 

Currently supports AppState, NetInfo, and Geolocation APIs provided by React Native

An (admittedly gross) example of these APIs in use: 

```
App.js

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppState, NetInfo, Geolocation } from "react-native-fns";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppState
          render={({ appState }) => {
            return (
              <NetInfo
                render={({ connectionInfo }) => {
                  return (
                    <Geolocation
                      render={({ position, positionError }) => {
                        return (
                          <View>
                            <Text>
                              NetInfo: {`${JSON.stringify(connectionInfo)}`}
                            </Text>
                            <Text>AppState: {`${appState}`} </Text>
                            <Text>Geolocation: {`${JSON.stringify(position)} ${positionError}`}</Text>
                          </View>
                        );
                      }}
                    />
                  );
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}
```
