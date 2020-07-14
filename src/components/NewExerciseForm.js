import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IndexPath, Select, SelectItem, Input} from '@ui-kitten/components';

const muscles = [
  {key: 0, name: 'Bicep'},
  {key: 1, name: 'Tricep'},
  {key: 2, name: 'Pecho'},
  {key: 3, name: 'Espalda'},
];

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

export const NewExerciseForm = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const nameInputState = useInputState();
  const descriptionInputState = useInputState();

  const displayValue = muscles[selectedIndex.row].name;

  const renderOption = (title) => (
    <SelectItem title={title.name} key={title.key} />
  );

  return (
    <View>
      <View style={styles.inputContainer}>
        <Input
          label="Nombre"
          placeholder="Nombre de este ejercicio"
          caption="Utiliza un nombre que sea fácil de identificar"
          {...nameInputState}
        />
      </View>

      <View style={styles.inputContainer}>
        <Select
          label="Músculo"
          caption="Selecciona el músculo principal que trabaja este ejercicio"
          placeholder="Selecciona un músculo"
          selectedIndex={selectedIndex}
          value={displayValue}
          onSelect={(index) => setSelectedIndex(index)}>
          {muscles.map(renderOption)}
        </Select>
      </View>

      <View style={styles.inputContainer}>
        <Input
          label="Descripción"
          caption="Escribe una descripción general de la forma en que se realiza este ejercicio"
          placeholder="Indicaciones para la realización de este ejercicio"
          multiline={true}
          textStyle={styles.inputDescription}
          {...descriptionInputState}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  inputDescription: {
    minHeight: 128,
  },
});
