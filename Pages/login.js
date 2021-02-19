import React from 'react';
import { ImageBackground } from 'react-native';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Fundo from '../assets/fundo.jpg';
import LogoSpace from '../assets/logoSpace.png';

export default function Login ({navigation}){
    return(
       <ImageBackground source={Fundo} style={style.fundo}>
           
           <View style={style.div} >               
                <Image style={style.logo} source={LogoSpace} ></Image>

                <Text style={style.corTexto}>Email : </Text>
                <TextInput style={style.input}>
                
                </TextInput>

                <Text style={style.corTexto} >Senha : </Text>
                <TextInput style={style.input} secureTextEntry={true}>

                </TextInput>

                <TouchableOpacity style={style.button} onPress={()=>{navigation.navigate('Game')}} >
                    <Text style={style.buttonText}>Próximo</Text>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>{navigation.navigate('Game')}}>
                    <Text style={style.senha}>Quer apenas dar uma olhadinha? ? Clique aqui! </Text>
               </TouchableOpacity>
                
            </View>
       </ImageBackground>
       
    )
}
const style = StyleSheet.create({
    fundo: {
        flex : 1,
        backgroundColor : "#219EBC",
        alignItems: 'center',
        justifyContent: 'center',
        },
    div : {
        borderRadius : 25,
        backgroundColor : "#4F4F4F",
        width : "80%",
        height : 380,
        alignItems: 'center',

    },
    logo : {
        resizeMode : 'stretch',
        width : "90%",
        height : "30%",
        marginTop : 15
        
    },
    input : {
        width : "80%",
        borderStyle : "solid",
        borderColor : "black",
        borderWidth : 1,
        borderRadius : 10
    },
    corTexto :{
        color : "white",
        marginRight : "60%",
    },
    senha : {
        color : "white",
        fontSize : 12,
        paddingVertical : 10
    },
    button : {
        margin : 10,
        alignItems: 'center',
        borderRadius : 10,
        backgroundColor : "white",
        width : "80%",
        height : 25
    },
    buttonText:{
        color : "black",
        paddingTop : 2,
    }
    })

