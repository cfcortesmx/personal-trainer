import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AddExerciseScreen from './src/screens/AddExerciseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddExercise">
        <Stack.Screen
          name="AddExercise"
          component={AddExerciseScreen}
          options={{title: 'Agregar Ejercicio'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
