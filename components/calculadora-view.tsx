import { Text, View } from 'react-native';
import { viewStyles } from '../assets/styles/view.style';
import { CalculadoraKeys } from './calculadora-keys';
export function CalculadoraView() {
  return (
    <View style={viewStyles.container}>
      <Text style={viewStyles.textHeader}>2 + 3 =</Text>
      <Text style={viewStyles.textResult}>5</Text>
    </View>
  );
}