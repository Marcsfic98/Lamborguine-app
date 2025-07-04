import React, { useEffect } from 'react';
import { View , Text , Button ,Image} from 'react-native';
import { styles } from './styles';
import { Divider } from '../Divider';
import { CAR_ASSENTS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { useState } from 'react';
import { CarModel } from './props';
import { handleNextIten, handlePreviousItem, loadCarData } from './actions';

export function CardView() {

  const [carData , setCarData] = useState<CarModel | null> (null)

  useEffect(()=>{
    (async()=>{
      await loadCarData(1, setCarData);
      
      
    })();
  },[])

  const renderLogoBox = () => (
      <View style={styles.logoContainer}>
        <Image style={styles.iconLogo} source={require('../../../assets/pngegg.png')} />
      </View>);

  const renderCarDetails = () => (
    <View style={{alignItems:"center"}}>
      <Text style={styles.carBrand}>Lamborghine</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );
  
  const renderCarImage = () => (
    <Image style={styles.image} source={{uri:`${CAR_ASSENTS_BASE_URL}${carData?.id}.png`}} />
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabalContainer}>
      <Button title='<' color={'#fff'}  onPress={()=>handlePreviousItem(carData,setCarData)}/>
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title='>' color={'#fff'} onPress={()=>handleNextIten(carData,setCarData)}/>
    </View>
  )
  

  return (
    <View style={styles.imgContainer}>
        {renderLogoBox()}
        <Divider/>
        {renderCarDetails()}
        {renderCarImage()}
        <Divider/>
        <BuyButton/>
        {renderPriceControls()}
    </View>
  );
}