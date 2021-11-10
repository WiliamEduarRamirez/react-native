import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
   const [courseGoals, setCourseGoals] = React.useState<any[]>([]);

   const addGoalHandler = (goalTitle: string): void => {
      setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
   };
   const removeGoalHandler = (goalId: string) => {
      setCourseGoals(courseGoals.filter((x) => x.id !== goalId));
   };
   return (
      <View style={styles.screen}>
         <GoalInput addGoalHandler={addGoalHandler} />
         <FlatList
            keyExtractor={(item) => item.id}
            data={courseGoals}
            renderItem={(itemData) => (
               <GoalItem onDelete={removeGoalHandler} goal={itemData.item} />
            )}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      padding: 50,
   },
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
   listItem: {
      padding: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      marginVertical: 4,
      borderWidth: 1,
   },
});
