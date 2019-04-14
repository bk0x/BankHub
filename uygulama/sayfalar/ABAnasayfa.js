import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import GirisEkrani from './Giris';

class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('/Projects/P0/uygulama/Vectors/kt_yatay_logo_yatay_orj_01.jpg')}
        style={{ width: 140, height: '100%' }}
      />
    );
  }
}

class ABAnasayfa extends Component {
  
  
    render () {
      return (
        <View style={{flex:1}}>
         <TouchableOpacity style={{backgroundColor:'#046647',width:'100%',height:'14%'}}>
          <Image style={{width: '50%', height: '100%',paddingHorizontal:200}} source={require('/Projects/P0/uygulama/Vectors/kt_yatay_logo_yatay_orj_01.jpg')} />
        </TouchableOpacity>
        <View style={{backgroundColor:'#046647'}}>

        </View>
        <View style={{alignItems:'center'}}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Kisisell')} style ={styles.buton}>
            <Text style={styles.yazı}>Kisisel verilere dönmek için</Text>
            <Text style={styles.yazı}>Tıklayınız.</Text>
            </TouchableOpacity>
            </View>
          <View style = {{backgroundColor:'#C99D00',borderRadius:50,width:'70%',marginTop:20,alignSelf:'center'}}>
            <Text style={{fontSize:45,color:'white',alignSelf:'center'}}>Akıllı Bütçe</Text>
            <Text style={{fontSize:40,color:'white',alignSelf:'center'}}>Sayfası</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Zamana')} style ={styles.buton}>
            <Text style={styles.yazı}>Zamana Göre Bütçe Hesaplama</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Dvz')} style ={styles.buton}>
          <Text style={styles.yazı}>Döviz/Değer Çizelgesi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AFS')} style ={styles.buton}>
          <Text style={styles.yazı}>Akıllı Fatura Sistemi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('GelirGider')} style ={styles.buton}>
          <Text style={styles.yazı}>Kredi ve Kart Tavsiyesi</Text>
          </TouchableOpacity>
        </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  buton: {
    marginTop:30,
    borderRadius:50,
    width:'80%',
    height:50,
    alignItems:'center',
    backgroundColor:'#046647',
    justifyContent:'center'
  },
  yazı:{
    fontSize:20,
    color:'white'
  }
});

export default ABAnasayfa;