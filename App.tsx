import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
   const [outputText, setOutputText] = React.useState(
      'Open up App.tsx to start working on your app!'
   );
   return (
      <View style={styles.container}>
         <Text>{outputText}</Text>
         <Button title={'Cambiar texto'} onPress={() => setOutputText('Texto cambiado')} />
         <StatusBar style='auto' />
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
