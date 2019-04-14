import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


class GirisEkrani extends Component {
  
  render () {
      return (
        <View style = {{flex:1,alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'#046647',width:'100%',height:'14%'}}>
          <Image style={{width: '50%', height: '100%',paddingHorizontal:200}} source={require('/Projects/P0/uygulama/Vectors/kt_yatay_logo_yatay_orj_01.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%',height:40,marginTop:40,alignItems:'center'}}>
          <Image style={{width:200, height:154}} source={require('/Projects/P0/uygulama/Vectors/hackathon.png')} />
        </TouchableOpacity>
            <Text style={{fontSize:15,color:'#046647',marginTop:150}}>Lütfen Bilgilerinizi Giriniz.</Text>
            <TouchableOpacity style = {{borderRadius:26,width:'70%',backgroundColor:'#046647',margin:15}}>
              <TextInput placeholder='TC nizi giriniz' style={{paddingLeft:20}} placeholderTextColor='#f4f4f4'/>
            </TouchableOpacity>
            <TouchableOpacity style = {{borderRadius:26,width:'70%',backgroundColor:'#046647',margin:15}}>
              <TextInput placeholder='Sifrenizi giriniz' style={{paddingLeft:20}} placeholderTextColor='#f4f4f4'/>
            </TouchableOpacity>
          <View style={{width: "70%", backgroundColor: "#046647",margin:10}}>
            <Button onPress={() => this.props.navigation.navigate('Kisisell')} title="Giris Yap" color="#046647"/>
          </View>
        </View>
      );
    }
}

  export default GirisEkrani;