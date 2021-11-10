import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
   addGoalHandler: (goalTitle: string) => void;
}

const GoalInput = ({ addGoalHandler }: Props) => {
   const [enteredGoal, setEnteredGoal] = React.useState<string>('');
   const goalInputHandler = (enteredText: string): void => {
      setEnteredGoal(enteredText);
   };
   return (
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder={'Este es un curso'}
            onChangeText={goalInputHandler}
            value={enteredGoal}
         />
         <Button title={'Agregar'} onPress={addGoalHandler.bind(this, enteredGoal)} />
      </View>
   );
};

export default GoalInput;
const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
   },
});
