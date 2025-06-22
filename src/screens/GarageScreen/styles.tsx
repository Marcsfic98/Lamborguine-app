import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    backgroundColor:"#1e1e20",
    alignItems:"center",
    justifyContent:"center"
  },
  cameraBox:{
    borderWidth:2,
    borderColor:"#d9a627",
    position:'relative',
    width:350,
    height:"90%",
    overflow:"hidden",
    borderRadius:10
  },
  triangleCorner:{
    position:"absolute",
    width:0,
    height:0,
    borderStyle:'solid',
    borderTopWidth:20,
    borderTopColor:"#d9a627",
    borderRightWidth:20,
    borderRightColor:"transparent"
  },
  topRight:{
    top:0,
    right:0,
    transform:[{rotate:"90deg"}]
  }
  ,
  topBotton:{
    bottom:0,
    left:0,
    transform:[{rotate:"270deg"}]
  },
  topLeft:{
    bottom:0,
    right:0,
    transform:[{rotate:"180deg"}]
  }
});