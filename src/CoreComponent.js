import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

import pikachu_img from './assets/pikachu.png';

const CoreComponent = () => {
  return (
    <ScrollView>
      <Text>Halo</Text>
      <View>
        <Text>Dunia, tipu-tipu!</Text>
        <Image source={pikachu_img} style={{width: 200, height: 200}} />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Tulisin aku, pikachu"
      />
    </ScrollView>
  );
};

export default CoreComponent;
