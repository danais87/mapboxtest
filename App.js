import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Map from  './component/Map';
import SearchableMap from './component/SearchableMap';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        destination:''
    }
  }

  render() {
    return (
      <View style={styles.container}>        
      <div>
        <BrowserRouter >
        <Switch>
            <Route exact path="/map" component={Map} />
            <Route exact path="/search" component={SearchableMap} />
        </Switch>
        </BrowserRouter>
      </div>
        <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>Go To Map <a href="/map">here</a></h1>
        <TextInput 
          style={styles.button}
          placeholder="Enter Destination"
          onChangeText={destination => this.setState({ destination })}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})