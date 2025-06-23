import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { CardView } from '../../components/CardView';

export function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}> </View>
        <View style={[styles.triangleCorner,styles.topRight]}> </View>
          <CardView/>
        <View style={[styles.triangleCorner, styles.topBotton]}> </View>
        <View style={[styles.triangleCorner, styles.topLeft]}> </View>
      </View>
    </View>
  );
}