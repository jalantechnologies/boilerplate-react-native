import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import I18n from "./helpers/i18n";

interface State {
  message: string;
}
export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { message: "" };
  }
  public render() {
    return (
      <View style={styles.container}>
        <Text>{I18n.t("ping")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
