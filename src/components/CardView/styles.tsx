import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imgContainer: {
    flex:1,
    width:"100%",
    height:'100%',
    overflow:'hidden',
    borderRadius:8
  },
  logoContainer:{
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    resizeMode:"contain"
  },
  iconLogo:{
    flex:1,
    width:'55%',
    resizeMode:"contain",

  },
  carBrand:{
    color:"white",
    fontWeight:400,
    fontSize:18,
    fontStyle:"italic"
  },
  carName:{
    color:'white',
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",

  },
  image:{
    flex:1,
    marginBottom:10,
    width:'100%',
    height:'100%',
    resizeMode:"contain"
  },
  priceLabalContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingBottom:10,
    alignItems:"center",
   
    padding:10
  },
  priceLabel:{
    color:"#fff"
  }
});