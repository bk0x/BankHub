import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,WebView} from 'react-native';

class Dvz extends Component {
  
    render () {
      return (
        <WebView
        source={{uri: 'https://tr.tradingview.com/chart/?symbol=FX:USDTRY'}}
        style={{height: '100%', width: '100%'}}
      />
      );
    }
}


export default Dvz;