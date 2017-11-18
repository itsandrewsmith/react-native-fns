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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
