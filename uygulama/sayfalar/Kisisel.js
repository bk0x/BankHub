import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text,TouchableOpacity,View,StyleSheet } from 'react-native';

class Kisisel extends Component {

    render() {
        return (
            <View style = {{flex:1}}>
                <ScrollView>
                <View style={{alignItems:'center',backgroundColor:'#C99D00'}}>
                <Text style={{fontSize:35,color:'white'}}>Kişisel Bilgileriniz:</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Ad ve Soyad</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>Kuveyt Turk</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Kart Tipiniz:</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>Kredi Kartı, Banka Kartı</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Aylık Ortalama Geliriniz:</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>4.800₺</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Aylık Kart Dışı Ek Geliriniz:</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>1.000₺</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Aylık Ortalama Gider:</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>3.500₺</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Güncel Yatırım Miktarınız:</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>12.000₺</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Mevcut Kredi Borcunuz:</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>8.400₺</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Aylık Ödenilen Kredi Borcu:</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>700₺</Text>
                </View>
                <View style={{backgroundColor:'#046647',alignItems:'center',borderRadius:40,margin:10}}>
                    <Text style={styles.yazilar}>Test</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:'gray'}}>Test</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={{backgroundColor:'#C99D00',borderRadius:40,alignItems:'center',width:'70%',justifyContent:'center',marginTop:15}}>
                    <Text style={{fontSize:25,color:'white'}}>Akıllı Bütçe</Text>
                    <Text style={{fontSize:25,color:'white'}}>için Tıklayınız.</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    yazilar: {
      fontSize:25,
      color:'white'
    }
  });
  
export default Kisisel;

