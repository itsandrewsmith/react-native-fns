# react-native-fns

Inspired by the npm package react-fns: https://github.com/jaredpalmer/react-fns

Exposes React Native APIs via HoC and Render Props for consumption. 


Exposes Render Prop Context Provider (see example)

Currently supports AppState, NetInfo, and Geolocation APIs provided by React Native


```
App.js

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, Connected } from "react-native-fns";

export default class App extends React.Component {

  // Provider passes context to any Connected wrapper
  // Connected wrapper passes states via render prop
  
  render() {
    return (
      <Provider>
        <View>
            <Connected render={(states) => (
              <Text>
                {`${JSON.stringify(states, 2, '\t')}`}
                </Text>
            )} />
          </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

```
