import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


class ZamanaGore extends Component {
  
  
  

    render () {
      return (
        <View style={{flex:1,alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={{backgroundColor:'#046647',borderRadius:50,width:'50%',height:'8%',justifyContent:'center',alignItems:'center',marginTop:10}}>
          <Text style={{fontSize:20,color:'white'}}>Geri Dönmek İçin</Text>
          <Text style={{fontSize:20,color:'white'}}>Tıklayınız.</Text>
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#C99D00',width:'80%',borderRadius:40,marginTop:20}}>
        <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>Ne Kadar Süreye Bağlı Hesap</Text>
        <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>Yapmak İstediniz?</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Biray')} style={{width:'90%',height:'10%',justifyContent:'center',alignItems:'center',backgroundColor:'#046647',borderRadius:40,marginTop:30}}>
          <Text style={{fontSize:20,color:'white'}}>1 AY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Ucay')} style={{width:'90%',height:'10%',justifyContent:'center',alignItems:'center',backgroundColor:'#046647',borderRadius:40,marginTop:30}}>
          <Text style={{fontSize:20,color:'white'}}>3 AY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Altıay')} style={{width:'90%',height:'10%',justifyContent:'center',alignItems:'center',backgroundColor:'#046647',borderRadius:40,marginTop:30}}>
          <Text style={{fontSize:20,color:'white'}}>6 AY</Text>
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#C99D00',width:'80%',borderRadius:40,marginTop:20}}>
        <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>İsteğe Bağlı Zaman Belirleyiniz:</Text>
        </View>
        <TouchableOpacity style={{width:'90%',height:'10%',justifyContent:'center',alignItems:'center',backgroundColor:'#046647',borderRadius:40,marginTop:30}}>
          <TextInput placeholder='Zamanı buraya giriniz.'style={{paddingLeft:20}} placeholderTextColor='#f4f4f4' keyboardType='numeric'/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'75%',height:'8%',justifyContent:'center',alignItems:'center',backgroundColor:'#046647',borderRadius:40,marginTop:30}}>
          <Text style={{fontSize:20,color:'white'}}>Girilen Değere Göre Hesapla.</Text>
        </TouchableOpacity>
        </View>
      );
    }
}


export default ZamanaGore;