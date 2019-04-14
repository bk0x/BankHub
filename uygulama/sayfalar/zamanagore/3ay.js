import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


class Ucayy extends Component {
  
    render () {
      return (
        <ScrollView style={{flex:1}}>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Zamana')} style={{backgroundColor:'#046647',borderRadius:50,width:'50%',justifyContent:'center',alignItems:'center',marginTop:10}}>
          <Text style={{fontSize:20,color:'white'}}>Geri Dönmek İçin</Text>
          <Text style={{fontSize:20,color:'white'}}>Tıklayınız.</Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',backgroundColor:'#046647',marginTop:10,marginHorizontal:1,borderRadius:5}}>
            <Text style={styles.baslık}>Son 3 Ay</Text>
        </View>
        <View style={{alignItems:'center',backgroundColor:'#C99D00',marginTop:10,marginHorizontal:1,borderRadius:5}}>
            <Text style={styles.baslık}>Giderler</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{width:'50%'}}>
        <Text>asdasdsads</Text>
        </View>
        <View style={{width:'50%'}}>
        <Text>asdasdsads</Text>
        </View>
        </View>
        <View style={{alignItems:'center',backgroundColor:'#C99D00',marginTop:10,marginHorizontal:1,borderRadius:5}}>
            <Text style={styles.baslık}>Gelirler</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{width:'50%'}}>
        <Text>asdasdsads</Text>
        </View>
        <View style={{width:'50%'}}>
        <Text>asdasdsads</Text>
        </View>
        </View>
        <View style={{alignItems:'center',backgroundColor:'#C99D00',marginTop:10,marginHorizontal:1,borderRadius:5}}>
            <Text style={styles.baslık}>Sonuç:</Text>
        </View>
        </ScrollView>    
      );
    }
}

const styles = StyleSheet.create({
  baslık: {
    fontSize:25,
    color:'white'
  }
});

export default Ucayy;