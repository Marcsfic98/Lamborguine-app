
import { StyleSheet, Text, View } from 'react-native';
import { GarageScreen } from './src/screens/GarageScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GarageScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
