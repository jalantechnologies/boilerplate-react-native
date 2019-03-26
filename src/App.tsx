import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { THEME_COLORS } from "./assets/styles/colors";
import I18n from "./helpers/i18n";
import { getUserDeviceLanguage } from "./helpers/localize";
import { APIService } from "./services";

interface State {
  message: string;
  errorText: string;
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: "",
      errorText: ""
    };
  }
  public render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressPing}
          title={I18n.t("ping")}
          color={THEME_COLORS.darkBackground}
          accessibilityLabel={I18n.t("ping_here")}
          testID="pingButton"
        />
        <Text style={styles.message}>{this.state.message}</Text>
        <Text style={styles.error}>{this.state.errorText}</Text>
      </View>
    );
  }
  private onPressPing = () => {
    APIService.request(APIService.Methods.GET, "ping", getUserDeviceLanguage())
      .then(response => response.json())
      .then(responseJson => {
        this.setMessage(responseJson.message);
      })
      .catch(error => {
        this.setErrorText(error);
      });
  };
  private setMessage(message: string): void {
    this.setState({ message });
  }
  private setErrorText(errorText: string): void {
    this.setState({ errorText });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME_COLORS.lightBackground
  },
  message: {
    fontSize: 18
  },
  error: {
    color: THEME_COLORS.errorText
  }
});
