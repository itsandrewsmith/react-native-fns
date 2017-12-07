import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, Connected } from "react-native-fns";
export default class App extends React.Component {

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
