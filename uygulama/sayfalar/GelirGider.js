import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


class GelirGider extends Component {
  
  constructor() {
    super()
    this.state = {
      iht: '16.000'
    }
  } 

  guncelIht = () => {
    this.setState({iht: '16.000'})
  }
  guncelKonut = () => {
    this.setState({iht: '17.000'})
  }
  guncelArac = () => {
    this.setState({iht: '18.000'})
  }
  guncelKobi = () => {
    this.setState({iht: '19.000'})
  }
  
    render () {
      return (
        <View style={{flex:1,alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={{backgroundColor:'#046647',borderRadius:50,width:'50%',height:'8%',justifyContent:'center',alignItems:'center',marginTop:10}}>
          <Text style={{fontSize:20,color:'white'}}>Geri Dönmek İçin</Text>
          <Text style={{fontSize:20,color:'white'}}>Tıklayınız.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#046647',width:'90%',height:'35%',alignItems:'center',marginTop:15}}>
          <Image style={{width: '50%', height: '100%',paddingHorizontal:200,borderWidth:4,borderColor:'#046647'}} source={require('/Projects/P0/uygulama/Vectors/SaglamKart.png')} />
        </TouchableOpacity>
        <View style={{alignItems:'center',backgroundColor:'#046647',borderRadius:30,width:'70%',marginTop:15}}>
            <Text style={{fontSize:20,color:'white'}}>Size Önereceğimiz Kart:</Text>
            <Text style={{fontSize:20,color:'white'}}>Sağlam Kart</Text>
        </View>
        <TouchableOpacity style={{marginTop:25,backgroundColor:'#C99D00',borderRadius:30,width:'90%',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'white'}}>Avantajlarını Öğrenmek İçin Tıklayın.</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:5}}>
        <View style={{width: '50%',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={styles.buton}>
            <Text onPress = {this.guncelIht} style={styles.yazı}>İhtiyaç Kredisi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buton}>
            <Text onPress = {this.guncelArac} style={styles.yazı}>Araç Kredisi</Text>
        </TouchableOpacity>
        </View>
        <View style={{width: '50%',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={styles.buton}>
            <Text onPress = {this.guncelKonut} style={styles.yazı}>Konut Kredisi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buton}>
            <Text onPress = {this.guncelKobi} style={styles.yazı}>Kobi Kredisi</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{marginTop:30}}>
            <Text style={{fontSize:18, color:'black'}}>Maksimum alabileceğiniz miktar: {this.state.iht}₺</Text>
        </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  buton:{
    width:'70%',
    height:50,
    backgroundColor:'#046647',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
    borderRadius:40
  },
  yazı:{
    fontSize:18,
    color:'white'
  }
});


export default GelirGider;