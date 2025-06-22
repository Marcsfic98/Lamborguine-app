import React from 'react';
import { View , Text , Button ,Image} from 'react-native';
import { styles } from './styles';
import { Divider } from '../Divider';
import { CAR_ASSENTS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';

export function CardView() {

  const renderLogoBox = () => (
      <View style={styles.logoContainer}>
        <Image style={styles.iconLogo} source={require('../../../assets/pngegg.png')} />
      </View>);

  const renderCarDetails = () => (
    <View style={{alignItems:"center"}}>
      <Text style={styles.carBrand}>Lamborghine</Text>
      <Text style={styles.carName}>Model</Text>
    </View>
  );
  
  const renderCarImage = () => (
    <Image style={styles.image} source={{uri:`${CAR_ASSENTS_BASE_URL}5.png`}} />
  )
  

  return (
    <View style={styles.imgContainer}>
        {renderLogoBox()}
      
    </View>
  );
}