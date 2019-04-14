import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import GirisEkrani from './sayfalar/Giris';
import ABAnasayfa from './sayfalar/ABAnasayfa';
import ZamanaGore from './sayfalar/ZamanaGore';
import Dvz from './sayfalar/Dvz';
import AFS from './sayfalar/AFS';
import GelirGider from './sayfalar/GelirGider';
import Kisisel from './sayfalar/Kisisel';
import Birayy from './sayfalar/zamanagore/1ay';
import Ucayy from './sayfalar/zamanagore/3ay';
import Altıayy from './sayfalar/zamanagore/6ay';


const AppNavigator = createDrawerNavigator(
  {
    Home: GirisEkrani,
    Kisisell : Kisisel,
    Details: ABAnasayfa,
    Zamana: ZamanaGore,
    Dvz: Dvz,
    AFS:AFS,
    GelirGider:GelirGider,
    Biray:Birayy,
    Ucay:Ucayy,
    Altıay:Altıayy
  },
);
export const Navapp = createStackNavigator({
  Zamana: {
      screen: ZamanaGore
  },
  Biray: {
      screen: Birayy,
  },
});

const styles = StyleSheet.create({  
  Buton: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props){
    super(props);
    console.disableYellowBox = true;
  }
  render() {
    return <AppContainer />;
  }
}