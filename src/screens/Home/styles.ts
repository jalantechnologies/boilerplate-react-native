import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  home: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
  },
  welcomeText: {
    fontSize: 24,
  },
  input: {
    height: 48,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 24,
    padding: 8,
    minWidth: 200,
  },
  spacer: {
    marginBottom: 20,
  },
  button: {
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
  },
  fact: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    marginBottom: 20,
  },
  catFact: {
    fontSize: 18,
    marginBottom: 10,
  }
});
