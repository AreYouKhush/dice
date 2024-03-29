import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Dice from './components/Dice';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Dice></Dice>
    </SafeAreaView>
  );
};

export default App;
