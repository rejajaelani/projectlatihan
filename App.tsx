import React from 'react';
import {Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View>
      <Photo />
      <Text>Abdul</Text>
      <Reja />
      <Text>Jaelani</Text>
    </View>
  );
};

const Reja = () => {
  return <Text>Reja</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',
      }}
      style={{width: 415, height: 400}}
    />
  );
};

export default App;
