import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './todo';
import { AppLoading } from "expo";
import * as Font from 'expo-font';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
   });
   this.setState({loading: false});
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <AppLoading />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
