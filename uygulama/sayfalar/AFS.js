import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


class AFS extends Component {
  
    render () {
      return (
        <ScrollView>
        <View style={{flex:1,alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={{backgroundColor:'#046647',borderRadius:50,width:'50%',height:'9%',justifyContent:'center',alignItems:'center',marginTop:10}}>
          <Text style={{fontSize:20,color:'white'}}>Geri Dönmek İçin</Text>
          <Text style={{fontSize:20,color:'white'}}>Tıklayınız.</Text>
        </TouchableOpacity>
        <View style={{width:'100%',height:'6%',backgroundColor:'#C99D00',marginTop:7,alignItems:'center'}}>
        <Text style={{fontSize:25,color:'white'}}>Son 3 Ay Faturalarınız:</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
        
        <View style={{width: '31%'}}>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturalarınız</Text>
        <Text style={styles.fatura}>Su</Text>
        <Text style={styles.faturanm}>Faturalarınız</Text>
        <Text style={styles.fatura}>Doğalgaz</Text>
        <Text style={styles.faturanm}>Faturalarınız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Telefon</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>İnternet</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        </View>

        <View style={{width: '23%'}}>
        <Text style={styles.fatura}>Bu Ay</Text>
        <Text style={styles.faturanm}>84₺</Text>
        <Text style={styles.fatura}>Bu Ay</Text>
        <Text style={styles.faturanm}>96₺</Text>
        <Text style={styles.fatura}>Bu Ay</Text>
        <Text style={styles.faturanm}>66₺</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        </View>
        <View style={{width: '23%'}}>
        <Text style={styles.fatura}>1 Ay Önce</Text>
        <Text style={styles.faturanm}>78₺</Text>
        <Text style={styles.fatura}>1 Ay Önce</Text>
        <Text style={styles.faturanm}>99₺</Text>
        <Text style={styles.fatura}>1 Ay Önce</Text>
        <Text style={styles.faturanm}>51₺</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        </View>
        <View style={{width: '23%'}}>
        <Text style={styles.fatura}>2 Ay Önce</Text>
        <Text style={styles.faturanm}>77₺</Text>
        <Text style={styles.fatura}>2 Ay Önce</Text>
        <Text style={styles.faturanm}>105₺</Text>
        <Text style={styles.fatura}>2 Ay Önce</Text>
        <Text style={styles.faturanm}>82₺</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        <Text style={styles.fatura}>Elektrik</Text>
        <Text style={styles.faturanm}>Faturanız</Text>
        </View>

        </View>
        </View>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  fatura:{
    fontSize:18,
    marginTop:10,
    backgroundColor:'#046647',
    color:'white'
  },
  faturanm:{
    fontSize:18,
    backgroundColor:'#046647',
    color:'white'
  },
});

export default AFS;