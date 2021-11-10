import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
   goal: any;
   onDelete: (goalId: string) => void;
}

const GoalItem = ({ goal, onDelete }: Props) => {
   return (
      <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, goal.id)}>
         <View style={styles.listItem}>
            <Text>{goal.value}</Text>
         </View>
      </TouchableOpacity>
   );
};
const styles = StyleSheet.create({
   listItem: {
      padding: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      marginVertical: 4,
      borderWidth: 1,
   },
});
export default GoalItem;
