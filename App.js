import React, { Component } from "react";
import {  StyleSheet, Text, View ,SafeAreaView} from "react-native";


const Images=[
  {
    uri:'https://cdn-images-1.medium.com/max/800/1*5LmPlq2XA8Lq7DXfcETP5w.png',
    label:'JavaScript'
  },
  {
    uri:'https://cdn-images-1.medium.com/max/800/1*QWonaeAXMWJkRiAUMejGPg.png',
    label:'Python'
  },
  {
    uri:'https://cdn-images-1.medium.com/max/800/1*7nBxisYFeHkKdnd70xRwrA.png',
    label:'Java'
  },
  {
    uri:'https://cdn-images-1.medium.com/max/800/1*YN_Efcu45xLg6hdssYD2Yw.png',
    label:'C#'
  },

  {
    uri:'https://cdn-images-1.medium.com/max/800/1*1-G-GB4SvCZG1cerX29MTg.png',
    label:'C++'
  }
]

export default class App extends Component {
  render() {
    return (
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
},
image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center'
},
imageLabel: {
    textAlign: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
    width: 320
},
empty: {
    flex: 1
}

});
