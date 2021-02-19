import React from 'react';
import { Text,  ScrollView,View, ImageBackground,TouchableOpacity, Button, Image} from 'react-native';
import styles from './style';
import Fundo from '../../assets/fundo.jpg';
import LogoSpace from '../../assets/logoSpace.png';


function Home({navigation}){

   
   
  return (
    <View style={styles.caixa}>     
     
      <ImageBackground source={Fundo} style={styles.fundo}>


        <View style={styles.home}>
            
            <Image  style={styles.logoSpace} source={LogoSpace} />

            <Text style={styles.homeText}>  De programadores para Programadores</Text>
        </View>

        <View >           

          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.texto}>Realize seu Login!!</Text>
          </TouchableOpacity>
          

        </View>
        
      </ImageBackground>
   
    </View>
  )
  
}
export default Home;