import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Button, Divider, TopNavigation} from '@ui-kitten/components';

import {ImageList} from '../components/ImageList';
import {NewExerciseForm} from '../components/NewExerciseForm';
import {ScrollView} from 'react-native-gesture-handler';

const AddExerciseScreen = (props, {navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <TopNavigation title="Nuevo Ejercicio" alignment="center" />
      <Divider />
      <ScrollView>
        <ImageList {...props} />
        <View style={styles.formStyle}>
          <NewExerciseForm />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <Button style={styles.button} status="danger">
              Cancelar
            </Button>
          </View>
          <View style={styles.singleButtonContainer}>
            <Button style={styles.buttonStyle}>Guardar</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  formStyle: {
    padding: 16,
  },
  buttonsContainer: {
    padding: 16,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleButtonContainer: {
    flex: 1,
    margin: 4,
  },
});

export default AddExerciseScreen;
