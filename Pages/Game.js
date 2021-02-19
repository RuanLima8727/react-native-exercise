import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Fundo from '../assets/fundo.jpg';
import Microondas from '../assets/microondas.png'
import Microondas2 from '../assets/microondas2.png'
import Lavaroupas from '../assets/lavaroupas.png'
import Geladeira from '../assets/geladeira.png'


export default function Game({navigation}){
    return(
        <View style={style.view}>
            <ImageBackground source={Fundo}style={style.container}imageStyle={style.image}>

            <TouchableOpacity style={style.buttonHome} onPress={()=>{navigation.navigate('Home')}} >
                <Text style= {{color : 'white'}} >Home</Text>
            </TouchableOpacity>

                <Text style={style.titulo}> Veja Nossos Produtos !!!!</Text>
                
                <Image style={style.div} source={Geladeira} ></Image>               

                <Image style={style.div2} source={Microondas} ></Image>            

                <Image style={style.div3} source={Microondas2} ></Image>
                                
                <Image style={style.div4} source={Lavaroupas} ></Image>       
               
          

            </ImageBackground>
            
        </View>
    )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
        },
    image : {
        flex : 1,
        resizeMode : 'cover'
    },
    view : {
        flex : 1
    },
    talk : {
        backgroundColor : "white",
        height: "18%",
        width : "100%",
        position : "absolute",
        bottom : 0,
        borderRadius : 25,
        fontSize : 20,
        padding : 20
    },
    button : {
        backgroundColor : "#219EBC",
        width : "20%",
        height : "5%",
        position : "absolute",
        bottom : 15,
        marginLeft : "70%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 10,        
    },
    buttonHome :{
        backgroundColor : "#4F4F4F",
        width : "20%",
        height : "5%",
        position : "absolute",
        bottom : "85%",
        marginLeft : "70%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 10,
    },
    titulo:{
       fontSize : 25,
       color : "white",
       backgroundColor : "#4F4F4F",
            
           },
    div :{
        position : "absolute",
        bottom : "0%",
        height : '35%',
        width : '40%',
        margin : 20,
        backgroundColor : "#4F4F4F",
        borderRadius : 10             
    },
    div2 :{
        position : "absolute",
        bottom : "40%",
        height : '35%',
        width : '40%',
        margin : 20,
        backgroundColor : "#4F4F4F",
        borderRadius : 10            
    },
    div3 :{
        position : "absolute",
        bottom : "0%",
        height : '35%',
        width : '40%',
        margin : 20,
        marginLeft : 190,
        backgroundColor : "#4F4F4F", 
        borderRadius : 10             
    },
    div4 :{
        position : "absolute",
        bottom : "40%",
        height : '35%',
        width : '40%',
        margin : 20,
        marginLeft : 190,
        backgroundColor : "#4F4F4F",
        borderRadius : 10              
    },
    
  });